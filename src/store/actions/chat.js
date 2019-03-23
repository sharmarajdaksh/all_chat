import * as actionTypes from './actionTypes';

// The action of clicking SEND after typing a message
export const chatSubmit = (name, message) => {
    return {
        type: actionTypes.CHAT_SUBMIT,
        name: name,
        message: message
    }
}