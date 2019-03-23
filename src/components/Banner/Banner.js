import React from 'react';

import favicon_white from '../../img/all_chat_white.svg'
import classes from './Banner.module.css';

// Simple header for the App, with an image logo
const banner = () => {
    return (
        <header className={classes.Banner}>
            <div className={classes.BannerContainer}>
                <img className={classes.Logo} src={favicon_white} alt='All_Chat' />
            </div>
        </header>
    );
};

export default banner;