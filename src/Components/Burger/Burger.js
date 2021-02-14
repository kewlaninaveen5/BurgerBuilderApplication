import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let bugredientsObjectToArray = Object.keys(props.ingredients).map((igkey) => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
           return <BurgerIngredient key={igkey + i} type = {igkey} />;
        });

    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []); 

    if (bugredientsObjectToArray.length === 0) {
        bugredientsObjectToArray = <p>Please Start to add Ingredients!</p>;
    }

    

    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {bugredientsObjectToArray}
            <BurgerIngredient type='bread-bottom' />

        </div>
    );

};

export default burger;