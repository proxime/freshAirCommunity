import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CountriesSelect = ({ countries, onchange, country }) => {
    const countriesList = countries.map((country, index) => (
        <option value={country.country} key={index}>
            {country.name}
        </option>
    ))

    return (
        <>
            <label htmlFor="country">Państwo</label>
            <select name="country" id="country" onChange={e => onchange(e)} value={country}>
                <option value="select">
                    - Wybierz Państwo -
                </option>
                {countriesList}
            </select>
        </>
    );
}

CountriesSelect.propTypes = {
    countries: PropTypes.array.isRequired,
    onchange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    countries: state.data.countries,
})

export default connect(mapStateToProps)(CountriesSelect);