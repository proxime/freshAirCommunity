import React, { useEffect, useState } from 'react';
import './PollutionControl.css';
import PropTypes from 'prop-types';
import CountriesSelect from './CountriesSelect';
import StateSelect from './StateSelect';
import CitiesSelect from './CitiesSelect';
import { connect } from 'react-redux';
import { initData } from '../../actions/data';
import { getStates } from '../../actions/data';
import { getCities } from '../../actions/data';
import { getCity } from '../../actions/data';

const PollutionControl = ({ getStates, initData, countries, getCities, getCity }) => {
    useEffect(() => {
        if (countries.length === 0) {
            initData();
        }
    }, [])

    const [formData, setFormData] = useState({
        country: 'Poland',
        state: 'Mazovia',
        city: 'Warsaw',
    })

    const onchangeCountry = e => {
        setFormData({
            country: e.target.value,
            state: "select",
            city: "select",
        })
        getStates(e.target.value);
    }

    const onchangeState = e => {
        setFormData({
            ...formData,
            state: e.target.value,
            city: 'select',
        })
        getCities(formData.country, e.target.value);
    }

    const onchangeCity = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onsubmit = e => {
        e.preventDefault();
        const { country, state, city } = formData;
        if (!country || country === "select") return;
        if (!state || state === "select") return;
        if (!city || city === "select") return;
        getCity(country, state, city);
    }

    return (
        <div className="container">
            <div className="pollution-container">
                <div className="polution-cover">
                    <form onSubmit={e => onsubmit(e)}>
                        <div className="polution-form-item">
                            <CountriesSelect onchange={onchangeCountry} country={formData.country} />
                        </div>
                        <div className="polution-form-item">
                            <StateSelect onchange={onchangeState} state={formData.state} country={formData.country} />
                        </div>
                        <div className="polution-form-item">
                            <CitiesSelect onchange={onchangeCity} city={formData.city} state={formData.state} />
                        </div>
                        <div className="polution-form-item">
                            <button>Pokaż</button>
                        </div>
                    </form>
                    <div className="pollution-desc">
                        <p>Sprawdź <span className="bold">poziom zanieczyszczenia</span></p>
                        <p><span className="bold">w</span> swoim <span className="bold">mieście</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

PollutionControl.propTypes = {
    getStates: PropTypes.func.isRequired,
    initData: PropTypes.func.isRequired,
    getCities: PropTypes.func.isRequired,
    getCity: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    countries: state.data.countries,
})

export default connect(mapStateToProps, { getStates, initData, getCities, getCity })(PollutionControl);