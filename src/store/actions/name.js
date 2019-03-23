import * as actionTypes from './actionTypes';

// the action of making a change to user's set name
export const nameChanged = (name) => {
    return {
        type: actionTypes.NAME_CHANGED,
        name: name
    }
}