import React from 'react';
import classes from './DrowerToggle.css';

const drowerToggle = (props) => (
    <div onClick={props.openMenu} className={classes.DrowerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drowerToggle;