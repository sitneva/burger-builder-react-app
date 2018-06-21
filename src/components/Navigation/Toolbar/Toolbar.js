import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrowToggle from '../SideDrower/DrowerToggle/DrowerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrowToggle openMenu={props.drawToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;