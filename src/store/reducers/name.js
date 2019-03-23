import * as actionTypes from '../actions/actionTypes';

// name used by the current user
// defaults to anonymous
const initialState = {
    name: 'Anonymous'
};

// a reducer to manage name changes made by user
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.NAME_CHANGED: return {
            ...state,
            name: action.name
        };
        default: return state;
    }
}

export default reducer;