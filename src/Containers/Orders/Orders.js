import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Spinner from '../../Components/UI/Spinner/Spinner';
import Order from '../CheckoutPanel/Order/Order';
import axios from '../../axiosOrders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as Actions from '../../Store/Actions/index';


class Orders extends Component {

 
    
    componentDidMount () {
        this.props.onFetchOrders();
    };

    render () {     
        
        let orders = <Spinner />;
        if(!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order key={order.id} 
                       ingredients={order.ingredients}
                       price={order.price}    /> 
            ))
        }

        return (
            <div>
                {orders}
            </div>
        );
            
        
    };
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(Actions.fetchOrders())
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (WithErrorHandler(Orders, axios));