import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../Components/UI/Button/Button';
import Classes from './ContactData.css';
import axios from '../../axiosOrders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Input from '../../Components/UI/Input/Input';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../Store/Actions/index';



class ContactData extends Component {
    state = {
        orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: "text",
                        placeholder: 'Your Name'
                    },
                value: '',
                validation: {
                        required: true
                    },
                valid: false,
                touched: false
                },
                address:  {
                    elementType: 'input',
                    elementConfig: {
                        type: "text",
                        placeholder: 'Your Address'
                    },
                value: '',
                validation: {
                        required: true
                    },
                valid: false,
                touched: false
                },
                deliveryMethod:  {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value: 'fastest', displayValue: 'Fastest'},
                            {value: 'cheapest', displayValue: 'Cheapest'}
                                    
                    ]
                    },
                value: 'fastest',
                validation: {},
                valid: true
                }
        },
        formIsValid: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let elementIdentifier in this.state.orderForm) {
            formData[elementIdentifier] = this.state.orderForm[elementIdentifier].value
        }

        this.setState({loading: true});
        console.log( 'form data on the right' + formData )
        const orderedBurgerData = {            
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
            
        }

        this.props.onOrderBurger(order);
        
        this.setState({showingModalForPurchasingBurger: false});
        console.log(orderedBurgerData);
    }

    checkValidity (value, rules) {
        let isValid = true;
               
        if (rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value)
        const updatedOrderForm = {
            ...this.state.orderForm
        }
            //this is done to copy the state deeply
            //since the state is nested objects and
            // so inner objects didnt get copied in first spread operator
        const updatedFormElement = {                            
            ...updatedOrderForm[inputIdentifier]                
        }
        updatedFormElement.value=event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }
        
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid}); 

    
    };                                                          

    render () {
        const formElementsArray = [];
        for ( let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler} >
                    {/* <Input elementType='...' elementConfig='...' Value='...' />   */}
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.value}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}

                             />
                    ))}  
                    <Button buttonType='Success' disabled={!this.state.formIsValid}  >ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form= <Spinner />
        }
        return (
            <div className={Classes.ContactData} >
                {console.log('Hello world')}
                <h3>Enter Your Contact Details</h3>
                {form}        
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
return {
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))

}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios)) ;