import React from 'react'
import classes from './HeaderButton.module.css';
function HeaderButton({title}){
    return ( 
        <button className={classes['button']}>{title}</button>
    )
}

export default HeaderButton