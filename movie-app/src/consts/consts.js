
//Search Input Types
export const InputTypes = {
    TITLE : 'Title',
    YEAR : 'Year'
}

//Reducer Actions
export const Action = {
    INIT: 'init',
    ADD : 'add',
    DELETE : 'delete',
    CLEAR : 'clear'
}

//Fixed Values
export const PRICE = "3.99";
export const FRACTION_DIGITS = 2;

//Images
export const DEFAULT_IMG_SRC = '/noimage1.png';

//API Routes
export const GET_CART_API = '/api/cart';

export const TRENDING_PAGE = '/trending/all/week?&language=en-US';

export const GENRE_LIST = '/genre/movie/list?language=en'



//Success and Error Messages:
export const PURCHASE_SUCCESS_MSG = "Congrats! Purchase successful"
export const REQUEST_FAIL_MSG = "Could not process request, try again later"
export const ADD_TO_CART_FAIL_MSG = "Could not add to cart, try again later"
export const DELETE_FROM_CART_FAIL_MSG = "Could not delete item, try again later"

export const UNHANDLED_ACTION_ERROR = "Unhandled action type"

