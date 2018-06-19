import React from 'react';
import MyAux from '../../hoc/MyAux'

const layout = (props) => (
    <MyAux>
        <div>Toolbar, SideDrow, Backdrop</div>
        <main>
            {props.children}
        </main>
    </MyAux>
);

export default layout;