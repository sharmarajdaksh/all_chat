import React from 'react';

import classes from './ChatWindow.module.css';
import MessagesDisplay from './MessagesDisplay/MessagesDisplay';
import ChatForm from './ChatForm/ChatForm';

// simple chat window containing a display of past messages and the message input field
const chatWindow = (props) => (
    <div className={classes.ChatWindow}>
        <MessagesDisplay />
        <ChatForm />
    </div>
);

export default chatWindow;