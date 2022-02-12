import React from 'react';
import classes from './Header.module.css';
//import HeaderButtons from './HeaderButtons/HeaderButtons';

const Header = () => {
    return (
        <div className={classes['header']}>
            <h1>Dave Hostler</h1>
            {/* <p>Personal Site</p> */}
        </div>
    )
}


export default Header