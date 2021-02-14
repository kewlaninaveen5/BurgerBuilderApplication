import * as  actionTypes from '../Actions/actionTypes';

const initialState = {
    ingredientsAmmount : null,
        totalPrice: 35,
        error: false
}

const INGREDIENT_PRICES_EACH = {
    salad: 20,
    paneer: 60,
    chicken: 60,
    cheese: 25,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients.[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES_EACH[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES_EACH[action.ingredientName]

            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false
            }

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }

            default:
                return state;    
    }
};

export default reducer;