import * as React from 'react'

// A context that holds the count
const CartContext = React.createContext();

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
function cartReducer(state = {cart: []}, action) {
    switch (action.type) {
        case 'init': {
            return {cart : action.payload}
        }
            // case 'deleteItem': {
        //     return state.filter((elem) => elem.id !== action.payload.id);
        // }
        case 'add': {
            //check if the new item not exist in state
            console.log("cart", state.cart)
            return { cart: [...state.cart, action.payload] };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

/**
 * A component that renders some children wrapped
 * in a CountContext.Provider so they can access the count context
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function CartProvider({children}) {
    const [state, dispatch] = React.useReducer(cartReducer, {cart: []})
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = {state, dispatch}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

/**
 * A function (custom hook) that returns the count context
 * the consumer of context must have access, in other words
 * it must be below a CountContext.Provider.
 * The function CountProvider.Consumer is a shorthand for it
 * @returns {unknown}
 */
function useCart() {
    const context = React.useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export {CartProvider, useCart}