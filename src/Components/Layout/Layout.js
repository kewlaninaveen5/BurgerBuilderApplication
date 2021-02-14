import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state= {
        showSideDrawer: false

    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer}
        }  
        );
    };

    render () {
        return (
            <Auxilliary>
        <Toolbar drawerToggleClicked={this.sideDrawerOpenedHandler} /> 
        <SideDrawer 
            closed= {this.sideDrawerClosedHandler} 
            open= {this.state.showSideDrawer}
        />
    <div > Side panel, backdrop</div>
    <main className= {Classes.Content}>{this.props.children}</main>
    </Auxilliary>

        );

    };


};

export default Layout;