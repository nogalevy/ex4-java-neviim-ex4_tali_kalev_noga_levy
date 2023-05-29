import {Link} from 'react-router-dom';
import {useCart} from "../contexts/CartContext";
import axios from "axios";
import CartItemCard from "./CartItemCard";
import React, {useState} from "react";
import "../stylesheets/colors.css"
import {PRICE, REQUEST_FAIL_MSG} from "../consts/consts";
import toastify from "../consts/toastify";
import Spinner from "./Spinner";

export default function Cart() {
    const {state, dispatch} = useCart();
    const [isLoading, setIsLoading] = useState(false);

    const createList = () => {
        if( !state || !state.cart ) return;
        return Object.values(state.cart).map((element) => {
            return (
                <CartItemCard key={element.id} element={element}/>
            )
        })
    }

    const emptyCart = async ()=>{
        if(isLoading) return;
        setIsLoading(true);
        try {
            await axios.delete('/api/cart');
            dispatch({type: "clear"})
        }
        catch (e){
            toastify.errorToast(REQUEST_FAIL_MSG)
        }finally {
            setIsLoading(false);
        }
    }

    //tali: tried to add stick-top to stick purchase buttons to the right side - didnt work
    return (
        <div className="container">

            <div className="d-flex flex-column justify-content-center">
                <h2 >Your Cart</h2>
                    {Object.keys(state.cart).length ?
                    <div className="row">
                        <div className="col-md-8 ">
                            {createList()}
                        </div>
                        <div className="col-md-4 sticky-md-top">
                            <h3>Total items: {Object.keys(state.cart).length}</h3>
                            <h3>Total price: {(Object.keys(state.cart).length * PRICE).toFixed(2)}</h3>
                            <Link className="btn btn-primary me-2 mb-3 col-6" to="/checkout">Purchase</Link>
                            <button onClick={emptyCart} className="btn btn-danger mb-3 col-4">
                                {!isLoading ? 'Clear All' : <Spinner/>}
                            </button>
                        </div>
                    </div>
                :
                    <div>
                        <p>Your cart is empty please go buy some stuff</p>
                        <Link className="btn btn-primary mb-3" to="/">Start Shopping</Link>
                    </div>
                }
            </div>
        </div>

    );
}
