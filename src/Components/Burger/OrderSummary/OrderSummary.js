import React, { Component } from 'react';
import Auxilliary from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    
    
    
    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
                .map(igkey => {
                    return (
                    <li key={igkey} >
                        <span style={{textTransform:'capitalize'}} >{igkey}</span>
                        :{this.props.ingredients[igkey]}
                    </li>)
                });
    return (
        <Auxilliary>
            <h3>Your Order</h3>
            <p>A delightful burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout? <strong>Final Price: {this.props.finalPrice}</strong> </p>
            <Button buttonType="Danger" clicked={this.props.cancelClicked}>CANCEL</Button>
            <Button  buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>


        </Auxilliary>
        );
    };

};

export default OrderSummary;