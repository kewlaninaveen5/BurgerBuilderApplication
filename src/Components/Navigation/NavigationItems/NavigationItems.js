import React from 'react';
import Classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className={Classes.NavigationItems} >
       <NavigationItem link="/" exact >     
           Burger Builder
       </NavigationItem>
       <NavigationItem link="/Orders"  >     
           Orders
       </NavigationItem>

    </ul>
    
);

export default navigationItems