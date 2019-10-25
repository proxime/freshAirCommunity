const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const News = require('../../models/News');

// @route   POST api/news
// @desc    Add new News
// @access  Private
router.post('/', [auth, [
    check('title', 'Wprowadź tytuł').isLength({ min: 1 }),
    check('text', 'Wprowadź zawartość').isLength({ min: 1 }),
    check('image', 'Wybierz obrazek').isLength({ min: 1 }),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { title, text, image } = req.body;

    try {
        const user = await User.findById(req.user.id);

        if (user.type !== 'redactor') return res.status(400).json({ errors: [{ msg: 'Nie masz odpowiednich uprawnień!', param: 'type' }] });

        const news = new News({
            author: req.user.id,
            title,
            text,
            image
        });

        await news.save();
        news.author = await User.findById(news.author).select('-password -likes');

        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

// @route   GET api/news/:id
// @desc    get news
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        news.author = await User.findById(news.author).select('-password -likes');
        if (!news) return res.status(404).json({ msg: 'News not found' });
        res.json(news);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") return res.status(404).json({ msg: 'News not found' });
        res.status(500).send('Server Error');
    }
});

// @route   GET api/news/
// @desc    get all news
// @access  Public
router.get('/', async (req, res) => {
    try {
        const news = await News.find().populate('author').sort('-date');;
        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/news
// @desc    Add new News
// @access  Private
router.post('/:id/like', [auth, [
    check('emote', "wybierz reakcję").isNumeric(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const emote = req.body.emote;

    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ msg: 'News not found' });
        news.author = await User.findById(news.author).select('-password -likes');
        if (emote < 0 || emote > 4) return res.status(404).json({ msg: "Wybierz poprawnę reakcję!" });

        const isUsed = news.likes.filter((like, index) => {
            if (String(like.user) === req.user.id) {
                if (String(like.emote) !== String(emote)) {
                    like.emote = emote;
                } else {
                    news.likes.splice(index, 1);
                }
                return like;
            }
        })

        if (isUsed.length > 0) {
            await news.save();
            return res.json(news);
        }

        news.likes.push({
            user: req.user.id,
            emote
        })

        await news.save();

        res.json(news);
    } catch (err) {
        if (err.kind === "ObjectId") return res.status(404).json({ msg: 'News not found' });
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;