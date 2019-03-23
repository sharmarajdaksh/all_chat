import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import classes from './MainBody.module.css';
import Input from '../../components/Input/Input';
import ChatWindow from '../../components/ChatWindow/ChatWindow';

// Used to hold everything except the page header/banner
class MainBody extends React.Component {

    // triggered everytime some change occurs in the username input
    inputChangedHandler = (event) => {
        let name = 'Anonymous';
        // Name stays 'anonymous' if input field is empty
        // else, it is set to the input string
        if (event.target.value.length > +0) {
            name = event.target.value;
        }
        // call the action to change global state
        this.props.onNameChanged(name);
    }

    render() {
        return (
            <div className={classes.MainBody}>
                <Input
                    inputName='NameInput'
                    label="You're using the name"
                    placeholder='Anonymous'
                    changed={(event) => this.inputChangedHandler(event)}
                />
                <ChatWindow />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNameChanged: (name) => dispatch(actionCreators.nameChanged(name))
    };
};

export default connect(null, mapDispatchToProps)(MainBody);