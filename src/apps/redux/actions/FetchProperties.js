import { FETCH_PROPERTIES_SUCCESS, FETCH_PROPERTIES_FAILURE, FETCHING_PROPERTIES } from '../../../root-app/Constants';

export function fetchProperties() {

    return async (dispatch) => {
        dispatch(getProperties())

        try {
            const res = await (fetch('https://api.myjson.com/bins/14nvfa'));
            const json = await res.json();
            return (dispatch(getPropertiesSuccess(json)));
        }
        catch (err) {
            return dispatch(getPropertiesFailure(err));
        }
    }
}

function getProperties() {

    return {
        type: FETCHING_PROPERTIES
    }
}

function getPropertiesSuccess(data) {

    return {
        type: FETCH_PROPERTIES_SUCCESS,
        data
    }
}

function getPropertiesFailure() {
    return {
        type: FETCH_PROPERTIES_FAILURE
    }
}