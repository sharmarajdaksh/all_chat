import React from 'react';
import { connect } from 'react-redux';

import Input from '../..//Input/Input';
import classes from './ChatForm.module.css';
import * as actionCreators from '../../../store/actions/index';

// Form to take chat message input and take action on SEND
class ChatForm extends React.Component {

    // stores the current value of the chat input field
    state = {
        message: ''
    }

    inputChangedHandler = (event) => {
        // changes internal state on change in input field
        this.setState({
            message: event.target.value
        });
    }

    // actions taken when SEND is clicked
    chatSubmit = (event) => {
        event.preventDefault(); // prevent page reload
        // If message is not empty, dispatch action to add message and username to MessagesList in global state
        if (this.state.message.length > 0)
            this.props.onChatSubmit(this.props.name, this.state.message);
        // reinitialize the value of input field and the internal state to empty
        event.target.value = '';
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.chatSubmit} className={classes.Form}>
                <Input
                    inputName='ChatInput'
                    placeholder='What do you want to say?'
                    changed={(event) => this.inputChangedHandler(event)}
                    value={this.state.message} />
                <button className={classes.Button} type='submit'>SEND</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChatSubmit: (name, message) => dispatch(actionCreators.chatSubmit(name, message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);