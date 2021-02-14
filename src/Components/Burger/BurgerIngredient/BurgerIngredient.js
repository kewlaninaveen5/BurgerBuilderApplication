import React, { Component } from 'react';
import Classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render () {

        let ingredient = null;

    switch (this.props.type) {
        
        case ('bread-top') :
            ingredient = (
            <div className= {Classes.BreadTop}>
                <div className={Classes.Seeds1}></div>
                <div className={Classes.Seeds2}></div>
            </div>
            );
            break;
        case ('chicken') :
            ingredient = <div className={Classes.Chicken}></div>;
            break;
        case ('paneer') :
            ingredient = <div className={Classes.Paneer}></div>;
            break;
        case ('salad') :
            ingredient = <div className={Classes.Salad}></div>;
            break;
        case ('cheese') :
            ingredient = <div className={Classes.Cheese}></div>;
            break;
        case ('bread-bottom'):
            ingredient = <div className= {Classes.BreadBottom}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
           
    };
    
};
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
    }; 


export default BurgerIngredient; 