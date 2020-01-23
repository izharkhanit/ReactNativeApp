'use strict';

import { FETCH_PROPERTIES_SUCCESS, FETCH_PROPERTIES_FAILURE, FETCHING_PROPERTIES } from '../../../root-app/Constants';

const initialState = {
    properties: [],
    isFetching: false,
    error: false
}

export default function propertiesReducer(state = initialState, action) {

    switch (action.type) {
        case FETCHING_PROPERTIES:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_PROPERTIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                properties: action.data
            }
        case FETCH_PROPERTIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}