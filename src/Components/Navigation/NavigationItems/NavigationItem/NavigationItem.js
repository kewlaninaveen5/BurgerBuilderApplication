import React from 'react';
import Classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';


const navigationItem = (props) => (
    <li className={Classes.NavigationItem} >
        <NavLink to={props.link} activeClassName={Classes.active} exact={props.exact} >
            {props.children}</NavLink> </li>
);

export default navigationItem