import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Weather from './Results/Weather';
import Pollution from './Results/Pollution';

const PollutionResult = ({ city }) => {

    return (
        city.city !== undefined ? (
            <div className="pollution-result">
                <div className="pollution-result-name">
                    <h1>{city.city}</h1>
                    <p>{city.country} // {city.state}</p>
                </div>
                <div className="pollution-result-cards">
                    <Pollution pollution={city.current.pollution}/>
                    <Weather weather={city.current.weather}/>
                    <div className="pollution-result-card">
                        <div className="pollution-card-desc">
                            <h1>29&deg;C</h1>
                            <p>Słonecznie</p>
                        </div>
                        <div className="pollution-card-image">

                        </div>
                        <div className="pollution-card-color"></div>
                    </div>
                    <div className="pollution-result-card">
                        <div className="pollution-card-desc">
                            <h1>29&deg;C</h1>
                            <p>Słonecznie</p>
                        </div>
                        <div className="pollution-card-image">

                        </div>
                        <div className="pollution-card-color"></div>
                    </div>
                    <div className="pollution-result-card">
                        <div className="pollution-card-desc">
                            <h1>29&deg;C</h1>
                            <p>Słonecznie</p>
                        </div>
                        <div className="pollution-card-image">

                        </div>
                        <div className="pollution-card-color"></div>
                    </div>
                </div>
            </div>
        ) : (
                <h1>Ładowanie...</h1>
            )
    );
}

PollutionResult.propTypes = {
    city: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    city: state.data.city
});

export default connect(mapStateToProps)(PollutionResult);