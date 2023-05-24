// const CART_ACTIONS = {
//     ADD_NEW : 'addNew',
//     DELETE : 'delete'
// }

/**
 * A reducer that handles the count state
 * @param state
 * @param action
 * @returns {{count: *}|{count: number}}
 */
export default function cartReducer(state = {cart: {}}, action) {
    switch (action.type) {
        case 'init': {
            return {cart : action.payload}
        }
        case 'delete': {
            let temp = state.cart;
            delete temp[action.payload.id];
            return {cart: temp};
        }
        case 'add': {
            return { cart: {...state.cart, [action.payload.id]: action.payload }};
        }
        case 'clear': {
            return { cart: {}};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}