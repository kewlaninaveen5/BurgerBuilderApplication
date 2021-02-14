import React from 'react';
import BurgerLogo from '../../Assets/Images/LogoBurger.png';
import Classes from './Logo.css';

const logo = (props) => (
<div className={Classes.Logo}  >
    <img src={BurgerLogo} alt="My Burger"
    
    ></img>
</div>

);

export default logo;

