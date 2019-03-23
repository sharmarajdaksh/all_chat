import React from 'react';
import { connect } from 'react-redux';

import classes from './MessagesDisplay.module.css';

const messagesDisplay = (props) => {

    // map each message in the global messagaesList array to a series of <p></p> element
    let countForKey = +0; // use the message number as a key
    const messages = props.messages.map(msg => {
        countForKey += 1;
        return (
            <p key={countForKey}><strong style={msg.color}>{msg.name}:</strong> {msg.message}</p>
        );
    })

    return (
        <div className={classes.MessagesDisplay} >
            {messages}
        </div>
    );

}

const mapStateToProps = state => {
    return {
        messages: state.chat.messagesList
    };
};

export default connect(mapStateToProps)(messagesDisplay);