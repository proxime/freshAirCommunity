import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StateSelect = ({ onchange, state, states, country }) => {
    const stateList = states.map((item, index) => (
        <option value={item.state} key={index}>
            {item.state}
        </option>
    ))

    return (
        country === "select" ? (
            <>
                <label htmlFor="state">Stan / Województwo</label>
                <select name="state" id="state" onChange={e => onchange(e)} value={state} disabled>
                    <option value="select">
                        - Wybierz Stan / Województwo -
                    </option>
                    {stateList}
                </select>
            </>
        ) : (
                <>
                    <label htmlFor="state">Stan / Województwo</label>
                    <select name="state" id="state" onChange={e => onchange(e)} value={state}>
                        <option value="select">
                            - Wybierz Stan / Województwo -
                        </option>
                        {stateList}
                    </select>
                </>
            )
    );
}

StateSelect.propTypes = {
    states: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    states: state.data.states,
});

export default connect(mapStateToProps)(StateSelect);