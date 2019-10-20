import { SET_ALERT, CLEAR_ALERTS } from "./types"


export const setAlert = payload => dispatch => {
    dispatch({
        type: SET_ALERT,
        payload
    })
}

export const clearAlerts = () => dispatch => {
    dispatch({
        type: CLEAR_ALERTS
    })
}