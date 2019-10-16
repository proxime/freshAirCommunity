const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');

const countryTranslate = require('../../utils/translator/countryTranslate');

// @route   GET api/data
// @desc    Get countries list
// @access  Public
router.get('/', async (req, res) => {
    const key = config.get('AirVisualKey');
    try {
        const countries = await axios.get(`https://api.airvisual.com/v2/countries?key=${key}`);
        const transladedCountries = [];
        countries.data.data.forEach(country => {
            const translated = countryTranslate(country.country);
            if (translated) {
                transladedCountries.push({
                    country: country.country,
                    name: translated
                })
            }
        });

        res.json(transladedCountries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;