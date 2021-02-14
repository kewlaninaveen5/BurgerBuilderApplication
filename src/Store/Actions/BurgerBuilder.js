import * as actionTypes from './ActionTypes';
import axios from '../../axiosOrders';


export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const RemoveIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burger-builder-project-76b2a.firebaseio.com/ingredients.json')
        .then(response =>{
            dispatch(setIngredients(response.data));
        }  ).catch(error=> {
            dispatch(fetchIngredientsFailed());

        })
        ;
    };
};