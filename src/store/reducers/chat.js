import * as actionTypes from '../actions/actionTypes';

// list of all messages to be displayed in the message box
const initialState = {
    messagesList: []
};

// Generate a random color
const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
}


// A reducer for chat-relaated functionality
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Case where user clicks SEND to send a mseesahe
        case actionTypes.CHAT_SUBMIT: return {
            ...state,
            messagesList: state.messagesList.concat({
                name: action.name,
                color: {'color': getRandomColor()}, // random color gets associated with each message
                message: action.message
            })
        };
        default: return state;
    }
}

export default reducer;