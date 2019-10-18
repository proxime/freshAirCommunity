import React, { useEffect, useState } from 'react';
import './PollutionControl.css';
import PropTypes from 'prop-types';
import CountriesSelect from './CountriesSelect';
import StateSelect from './StateSelect';
import CitiesSelect from './CitiesSelect';
import PollutionResult from './PollutionResult';
import { connect } from 'react-redux';
import { initData, getStates, getCities, getCity, deleteStates, deleteCities } from '../../actions/data';

const PollutionControl = ({ getStates, initData, data, city, getCities, getCity, deleteStates, deleteCities }) => {
    const [formData, setFormData] = useState({
        country: data.countries.length ? city.country : "select",
        state: data.states.length ? city.state : "select",
        city: data.cities.length ? city.city : "select"
    })
    const [disabledBtn, setDisabledBtn] = useState(false);

    useEffect(() => {
        if (city.city === undefined) {
            initData();
            setFormData({
                country: 'Poland',
                state: 'Mazovia',
                city: 'Warsaw'
            });
        }
        if (city.city !== undefined) {
            getStates(city.country);
            getCities(city.country, city.state);
            setFormData({
                ...formData,
                state: city.state,
                city: city.city,
            })
        }
    }, [])

    const onchangeCountry = e => {
        deleteStates();
        deleteCities();
        setFormData({
            country: e.target.value,
            state: "select",
            city: "select",
        })
        getStates(e.target.value);
    }

    const onchangeState = e => {
        deleteCities();
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
        if (disabledBtn) return;
        const { country, state } = formData;
        if (!country || country === "select") return;
        if (!state || state === "select") return;
        if (!city || city === "select") return;
        if (formData.city === city.city) return;
        console.log('send')
        setDisabledBtn(true);
        setTimeout(() => setDisabledBtn(false), 2000);
        getCity(country, state, formData.city);
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
            <PollutionResult />
        </div>
    );
}

PollutionControl.propTypes = {
    city: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    getStates: PropTypes.func.isRequired,
    initData: PropTypes.func.isRequired,
    getCities: PropTypes.func.isRequired,
    getCity: PropTypes.func.isRequired,
    deleteStates: PropTypes.func.isRequired,
    deleteCities: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    data: state.data,
    city: state.data.city,
})

export default connect(mapStateToProps, { getStates, initData, getCities, getCity, deleteStates, deleteCities })(PollutionControl);