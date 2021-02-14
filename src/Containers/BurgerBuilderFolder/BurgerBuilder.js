import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Auxilliary from '../../hoc/Auxilliary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axiosOrders';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import Spinner from '../../Components/UI/Spinner/Spinner';
import * as Actions from '../../Store/Actions/index';
import axios from '../../axiosOrders';
 




class BurgerBuilder extends Component {
    
    state = {

        showingModalForPurchasingBurger: false
    }

    componentDidMount () {
        this.props.onInitIngredients();
    };


    updatePurchaseState = (ingredients) => {
       
        const sum = Object.keys(ingredients)
                    .map( igkey => {
                        return ingredients[igkey]
                    })
                    .reduce((sum, el ) => {
                        return sum + el;
                    }, 0);
        return  sum > 0;            

    }

    // addIngredientHandler = (type) => {
    //     const oldValue = this.state.ingredientsAmmount[type];
    //     const updatedValue = oldValue + 1;
    //     const updatedIngredientsAmmount = {
    //         ...this.state.ingredientsAmmount
    //     };
    //     updatedIngredientsAmmount[type]=updatedValue;
    //     const priceAddition = INGREDIENT_PRICES_EACH[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
        
    //     this.setState({totalPrice: newPrice, ingredientsAmmount: updatedIngredientsAmmount});
    //     this.updatePurchaseState(updatedIngredientsAmmount);

    // };

    // removeIngredientHandler = (type) => {
    //     const oldValue = this.state.ingredientsAmmount[type];
    //     if (oldValue <= 0) {
    //         return;
    //     }
    //     const updatedValue = oldValue - 1;
    //     const updatedIngredientsAmmount = {
    //         ...this.state.ingredientsAmmount
    //     };
    //     updatedIngredientsAmmount[type]=updatedValue;
    //     const priceDeduction = INGREDIENT_PRICES_EACH[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
        
    //     this.setState({totalPrice: newPrice, ingredientsAmmount: updatedIngredientsAmmount});
    //     this.updatePurchaseState(updatedIngredientsAmmount);

    // };

    purchasingBurgerHandler = () => { 
        this.setState({showingModalForPurchasingBurger: true});
    };

    purchasingBurgerCancelled = () => {
        this.setState({showingModalForPurchasingBurger: false});

    };

    purchaseSuccessfulHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    };
    

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        
        let burger = this.props.error ? <h2>Ingredients Cant be loaded </h2> : <Spinner /> ;
         
         if (this.props.ings) {

            orderSummary = <OrderSummary 
            ingredients={this.props.ings}
            cancelClicked={this.purchasingBurgerCancelled}
             finalPrice={this.props.price}
            purchaseContinued={this.purchaseSuccessfulHandler}
            
            />
            burger =  (
                <div>
                <Burger ingredients={this.props.ings} />
                  
              <BuildControls 
                         currentPrice={this.props.price}
                         ingredientAdded={this.addIngredientHandler}
                         ingredientRemoved={this.removeIngredientHandler} 
                         disabled= {disabledInfo}
                         purchasable = {this.updatePurchaseState(this.props.ings)}
                         orderNowClicked = {this.purchasingBurgerHandler}
                     />
          {/* {console.log(disabledInfo)} */}
                     
                     </div>)

         }
         
        // if (this.state.loading) {
        //     {console.log('Spinner Shown' + this.state.loading)} 
        //     orderSummary = <Spinner />;
        // }

        return (
            <Auxilliary>
                
                
                <Modal show={this.state.showingModalForPurchasingBurger}
                 modalClosed={this.purchasingBurgerCancelled} >
                    {orderSummary}  
                    {/* <Spinner /> */}
                </Modal>
                {burger}
                
               

            </Auxilliary>
        );

    };

    
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(Actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(Actions.RemoveIngredient(ingName)),
        onInitIngredients: () => dispatch(Actions.initIngredients()),
        onInitPurchase: () => dispatch(Actions.purchaseInit())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)( withErrorHandler(BurgerBuilder, axios ));