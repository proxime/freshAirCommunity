import React, { } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CitiesSelect = ({ cities, onchange, city, state }) => {
    const citiesList = cities.map((item, index) => (
        <option value={item.city} key={index}>
            {item.name}
        </option>
    ))

    return (
        <>
            {state === "select" ? (
                <>
                    <label htmlFor="city">Miasto</label>
                    <select name="city" id="city" onChange={e => onchange(e)} value={city} disabled>
                        <option value="select">
                            - Wybierz Miasto -
                        </option>
                    </select>
                </>
            ) : (
                    <>
                        <label htmlFor="city">Miasto</label>
                        <select name="city" id="city" onChange={e => onchange(e)} value={city} >
                            <option value="select">
                                - Wybierz Miasto -
                            </option>
                            {citiesList}
                        </select>
                    </>
                )}
            )
        </>
    );
}

CitiesSelect.propTypes = {
    cities: PropTypes.array.isRequired,
    onchange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    cities: state.data.cities,
})

export default connect(mapStateToProps)(CitiesSelect);