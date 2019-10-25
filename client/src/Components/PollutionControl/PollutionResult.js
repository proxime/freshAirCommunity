import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Weather from './Results/Weather';
import Pollution from './Results/Pollution';
import Wind from './Results/Wind';
import Pressure from './Results/Pressure';
import PolutionLike from './PolutionLike';
import Loading from '../Loading';

const PollutionResult = ({ city, user, waitingForCity }) => {

    return (
        waitingForCity === false && city.city ? (
            <div className="pollution-result">
                <div className="pollution-result-name-container">
                    <div className="pollution-result-name">
                        <h1>{city.pl.miasto ? city.pl.miasto : city.city}</h1>
                        <p>{city.pl.panstwo ? city.pl.panstwo : city.country} {'//'} {city.pl.stan ? city.pl.stan : city.state}</p>
                    </div>
                    {user && <PolutionLike />}
                </div>
                <div className="pollution-result-cards">
                    <Pollution pollution={city.current.pollution} />
                    <Weather weather={city.current.weather} />
                    <Wind wind={city.current.weather.ws} />
                    <Pressure pressure={city.current.weather.pr} />
                </div>
            </div>
        ) : (
                <div className="pollution-result">
                    <Loading />
                </div>
            )
    );
}

PollutionResult.propTypes = {
    city: PropTypes.object.isRequired,
    waitingForCity: PropTypes.bool,
}

const mapStateToProps = state => ({
    city: state.data.city,
    user: state.auth.user,
    waitingForCity: state.data.waitingForCity,
});

export default connect(mapStateToProps)(PollutionResult);