import React from 'react';

import Banner from './components/Banner/Banner';
import MainBody from './containers/MainBody/MainBody';
import classes from './App.module.css';

// Root App component
class App extends React.Component {
    render() {
        return (
            <div className={classes.App}>
                <Banner />
                <MainBody />
            </div>
        );
    }
}

export default App;