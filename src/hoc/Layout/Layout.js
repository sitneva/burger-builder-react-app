import React, {Component} from 'react';
import MyAux from '../MyAux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrower from '../../components/Navigation/SideDrower/SideDrower';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    drawToggleClickedHandler = () => {
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }


    render() {
        return(
            <MyAux>
                <Toolbar drawToggleClicked={this.drawToggleClickedHandler}/>
                <SideDrower open={this.state.showSideDrawer} closed={this.sideDrawClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </MyAux>
        )
    }
}

export default Layout;