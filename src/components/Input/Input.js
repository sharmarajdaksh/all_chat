import React from 'react';

import classes from './Input.module.css';

// Simple customized Input component with label
// Returns an input for the NameInput
// Returns a textarea for the ChatInput
const input = (props) => {

    let input = (
        <input
            className={[classes.InputElement, classes.NameInput].join(' ')}
            name={props.inputName}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.changed} />

    );

    if (props.inputName === 'ChatInput') {
        input = (
            <textarea
                className={[classes.InputElement, classes.ChatInput].join(' ')}
                name={props.inputName}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.changed}
                rows='1'
                columns='1'
            ></textarea>
        );
    }

    return (
        <div className={classes.Input}>
            {props.inputName === 'NameInput' ? <label className={classes.Label}>{props.label}</label> : null}
            {input}
        </div>
    );
}

export default input; 