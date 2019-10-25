const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Get login user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth/register
// @desc    Register User
// @access  Public
router.post('/register', [
    check('login', 'Login musi zawierać od 6 do 16 znaków').isLength({ min: 6, max: 16 }).trim().escape(),
    check('email', 'Podaj prawidłowy adres E-mail').isEmail(),
    check('password', 'Hasło musi zawierać od 6 do 16 znaków').isLength({ min: 6, max: 16 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { login, email, password } = req.body;

    try {

        let userLogin = await User.findOne({ login });
        let userMail = await User.findOne({ email });

        const errorsTable = [];

        if (userLogin) {
            errorsTable.push({ msg: 'Podany Login jest już w użyciu', param: 'login' })
        }

        if (userMail) {
            errorsTable.push({ msg: 'Podany E-mail jest już w użyciu', param: 'email' })
        }

        if (errorsTable.length > 0) return res.status(400).json({ errors: errorsTable });

        const user = new User({
            login,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id,
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', [
    check('login', 'Wprowadź login!').exists().trim().escape(),
    check('password', 'Wprowadź hasło!').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { login, password } = req.body;

    try {
        let user = await User.findOne({ login });

        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Wprowadziłeś nieprawidłowe dane', param: 'data' }] });
        }

        const isMath = await bcrypt.compare(password, user.password);

        if (!isMath) {
            return res.status(400).json({ errors: [{ msg: 'Wprowadziłeś nieprawidłowe dane', param: 'data' }] });
        }

        const payload = {
            user: {
                id: user.id,
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/auth/change/email
// @desc    change user email
// @access  Private
router.post('/change/email', [auth, [
    check('email', 'Podaj prawidłowy adres E-mail').isEmail(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email } = req.body;

    try {
        const user = await User.findById(req.user.id).select('-password');

        const emailExist = await User.findOne({ email });
        if (emailExist) {
            if (email === user.email) return res.json(user);
            return res.status(400).json({ errors: [{ msg: 'Podany E-mail jest już zajęty', param: 'email' }] });
        }

        user.email = email;
        await user.save();

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth/change/password
// @desc    change user password
// @access  Private
router.post('/change/password', [auth, [
    check('password', 'Wprowadź hasło').exists(),
    check('password2', 'Hasło musi posiadać 6 do 16 znaków').isLength({ min: 6, max: 16 })
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { password, password2 } = req.body;

    try {
        const user = await User.findById(req.user.id);

        const isMath = await bcrypt.compare(password, user.password);
        if (!isMath) {
            return res.status(400).json({ errors: [{ msg: 'Wprowadziłeś błędnie aktualne hasło', param: 'password' }] });
        }

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password2, salt);

        await user.save();

        res.json({ alerts: [{ msg: 'Hasło zostało zmienione', param: 'successPassword' }] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth/change/avatar
// @desc    change user avatar
// @access  Private
router.post('/change/avatar', auth, async (req, res) => {
    const { avatar } = req.body;

    try {
        if (isNaN(Number(avatar)) || Number(avatar) < 0 || Number(avatar) > 14) return res.status(400).json({ errors: [{ msg: 'Wybierz prawidłowy avatar', param: 'avatar' }] });

        const user = await User.findById(req.user.id);

        user.avatar = (Number(avatar));

        await user.save();

        res.json({ alerts: [{ msg: 'Avatar został pomyślnie zmieniony', param: 'avatar' }] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth/likes
// @desc    like or onlike city
// @access  Private
router.post('/likes', [auth, [
    check('city', 'Podaj miasto').isString(),
    check('state', 'Podaj stan').isString(),
    check('country', 'Podaj kraj').isString()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { city, state, country, pl } = req.body;

    try {
        const user = await User.findById(req.user.id);

        let usedIndex = -1;
        const isUsed = user.likes.filter((like, index) => {
            if (like.city === city && like.state === state && like.country === country) {
                usedIndex = index;
                return like;
            }
        });

        if (isUsed.length > 0) {
            user.likes.splice(usedIndex, 1);
            await user.save();

            return res.json({ alerts: [{ msg: 'Już nie lubisz tego miasta', param: 'cityLikes' }] });
        }

        const cityLike = {
            city,
            state,
            country,
            pl
        }

        user.likes.push(cityLike);

        await user.save();

        res.json({ alerts: [{ msg: 'Polubiono nowe miasto', param: 'cityLikes' }] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;