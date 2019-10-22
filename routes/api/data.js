const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
const translate = require('translate');

const countryTranslate = require('../../utils/translator/countryTranslate');
const stateTranslate = require('../../utils/translator/stateTranslator');
const cityTranslate = require('../../utils/translator/cityTranslate');

translate.engine = 'yandex';
translate.key = 'trnsl.1.1.20191016T230614Z.eea32035de0f7c82.34f0666b7ccd7630fd2332bcebb790b5ebaf547b';

// @route   GET api/data
// @desc    Get countries list
// @access  Public
router.get('/', async (req, res) => {
    const key = config.get('AirVisualKey4');
    try {
        const countries = await axios.get(`https://api.airvisual.com/v2/countries?key=${key}`);
        const transladedCountries = [];
        countries.data.data.forEach(country => {
            const translated = countryTranslate(country.country);
            switch (country.country) {
                case 'United Kingdom':
                    country.country = 'uk';
            }
            if (translated) {
                transladedCountries.push({
                    country: country.country,
                    name: translated
                })
            }
        });

        transladedCountries.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

        res.json(transladedCountries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/data/states
// @desc    Get states list
// @access  Public
router.post('/states', async (req, res) => {
    const key = config.get('AirVisualKey3');
    const country = req.body.country;
    try {
        const states = await axios.get(`https://api.airvisual.com/v2/states?country=${country}&key=${key}`);

        const transladedStates = [];
        states.data.data.forEach(state => {
            const translated = stateTranslate(state.state);
            if (translated) {
                transladedStates.push({
                    state: state.state,
                    name: translated
                })
            }
        });

        transladedStates.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

        res.json(transladedStates);
    } catch (err) {
        if (err.response.status === 400) {
            return res.status(400).json({ msg: "Podane państwo nie jest obsługiwane" });
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/data/cities
// @desc    Get cities in state
// @access  Public
router.post('/cities', async (req, res) => {
    const key = config.get('AirVisualKey2');
    const { country, state } = req.body;
    try {
        const cities = await axios.get(`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${key}`);

        const transladedCities = [];
        cities.data.data.forEach(city => {
            const translated = cityTranslate(city.city);
            if (translated) {
                transladedCities.push({
                    city: city.city,
                    name: translated
                })
            }
        });

        transladedCities.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

        res.json(transladedCities);
    } catch (err) {
        if (err.response.status === 400) {
            return res.status(400).json({ msg: "Podane państwo lub stan nie są obsługiwane" });
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/data/city
// @desc    Get city
// @access  Public
router.post('/city', async (req, res) => {
    const key = config.get('AirVisualKey1');
    const { country, state, city } = req.body;
    try {
        const cityRes = await axios.get(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}`);
        const newCity = cityRes.data.data;
        newCity.pl = {};

        const translatedCountry = countryTranslate(newCity.country);
        if (translatedCountry) {
            newCity.pl.panstwo = translatedCountry;
        }

        const translatedState = stateTranslate(newCity.state);
        if (translatedState) {
            newCity.pl.stan = translatedState;
        }

        const translatedCity = cityTranslate(newCity.city);
        if (translatedCity) {
            newCity.pl.miasto = translatedCity;
        }

        res.json(newCity);
    } catch (err) {
        if (err.response.status === 404) {
            return res.status(404).json({ msg: "Podane państwo, stan lub miasto nie są obsługiwane" });
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;