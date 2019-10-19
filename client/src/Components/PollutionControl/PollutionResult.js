import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Weather from './Results/Weather';
import Pollution from './Results/Pollution';
import Wind from './Results/Wind';
import Pressure from './Results/Pressure';

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
                    <Wind wind={city.current.weather.ws}/>
                    <Pressure pressure={city.current.weather.pr}/>
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