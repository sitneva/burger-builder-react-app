import React from 'react';

import classes from './SideDrower.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import MyAux from '../../../hoc/MyAux'

const sideDrower = (props) => {
    let attachedClass = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClass = [classes.SideDrawer, classes.Open];
    }
    return (
        <MyAux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </MyAux>
    )
};

export default sideDrower;