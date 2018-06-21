import React from 'react';
import MyAux from '../../hoc/MyAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = (props) => (
    <MyAux>
        <Toolbar />
        <div> SideDrow</div>

        <main className={classes.Content}>
            {props.children}
        </main>
    </MyAux>
);

export default layout;