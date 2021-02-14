import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import Classes from './BuildControls.css';


const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Paneer', type: 'paneer'},
    { label: 'Chicken', type: 'chicken'},
    { label: 'Cheese', type: 'cheese'}

]

const buildControls = (props) => (
    <div className={Classes.BuildControls}>
         <h2>Current Price : {props.currentPrice} </h2> 
         {controls.map(ctrl =>(
             <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label} 
                    moreButtonClicked={() => props.ingredientAdded(ctrl.type)}
                    lessButtonClicked={() => props.ingredientRemoved(ctrl.type)} 
                    disableButton={props.disabled[ctrl.type]} 
                    />
                    
        ))}
        <button 
            className={Classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.orderNowClicked} >ORDER NOW
         </button>
         

    </div>

);

export default buildControls;