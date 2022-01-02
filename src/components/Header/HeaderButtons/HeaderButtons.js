import React from 'react'
import classes from './HeaderButtons.module.css';
function HeaderButtons({title}){
    return (

            
        <button className={classes['button']}>{title}</button>
    )
}

export default HeaderButtons
