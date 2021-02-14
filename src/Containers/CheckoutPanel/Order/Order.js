import React from 'react';
import Classes from './Order.css';

const order = (props) => {
    const ingredients= [];
    for (let ingredientName in props.ingredients) {
        console.log(ingredientName)
        ingredients.push({
            name: ingredientName,
            ammount: props.ingredients[ingredientName]
        });
    }
    console.log(ingredients.lengh + 'I am Ingredients u want')

    const ingredientOutput = ingredients.map( ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
                }}
            key={ig.name} >{ig.name} ({ig.ammount})  </span>
    })

    return (
        <div className={Classes.Order} >
        <p>Ingredients {ingredientOutput} </p>
        <p>Price: <strong>INR {props.price}</strong></p>
    </div>
    );
    
    };
    

export default order;