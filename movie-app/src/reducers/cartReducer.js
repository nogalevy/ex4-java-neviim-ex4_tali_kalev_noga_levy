import {Action, UNHANDLED_ACTION_ERROR} from "../consts/consts";

/**
 * A reducer that handles the count state
 * @param state
 * @param action
 * @returns {{count: *}|{count: number}}
 */
export default function cartReducer(state = {cart: {}}, action) {
    switch (action.type) {
        case Action.INIT: {
            return {cart : action.payload}
        }
        case Action.DELETE: {
            let temp = state.cart;
            delete temp[action.payload.id];
            return {cart: temp};
        }
        case Action.ADD: {
            return { cart: {...state.cart, [action.payload.id]: action.payload }};
        }
        case Action.CLEAR: {
            return { cart: {}};
        }
        default: {
            throw new Error(`${UNHANDLED_ACTION_ERROR}: ${action.type}`);
        }
    }
}