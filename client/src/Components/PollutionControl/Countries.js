import React, { useEffect } from 'react';
import './PollutionControl.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountries } from '../../actions/data';

const Countries = ({ countries, getCountries }) => {
    useEffect(() => {
        if (countries.length === 0) {
            getCountries();
        }
    }, []);

    const countriesList = countries.map((country, index) => (
        <li key={index}>
            {country.name}
        </li>
    ))

    return (
        <div className="container">
            <div className="countries-list">


                {countries.length > 0 ? (
                    <>
                        <h1>Państwa</h1>
                        <ul>
                            {countriesList}
                        </ul>
                    </>
                ) : <h1>Ładowanie...</h1>}
            </div>
        </div>
    );
}

Countries.propTypes = {
    countries: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    countries: state.data.countries,
})

export default connect(mapStateToProps, { getCountries })(Countries);