import { useState } from "react";
import {Link} from 'react-router-dom';
import {useCart} from "../contexts/CartContext";
import {Trash3Fill} from 'react-bootstrap-icons';
import axios from "axios";
import CartItemCard from "./CartItemCard";

export default function Cart(props) {
    const {state} = useCart();

    const createList = () => {
        if( !state || !state.cart ) return;
        return Object.values(state.cart).map((element) => {
            return (
                <CartItemCard key={element.id} element={element}/>
            )
        })
    }

    return (
        <div className="container">

            <div className="d-flex flex-column align-items-center justify-content-center">
                <h3 className="">cart</h3>
                <div className="">
                {Object.keys(state.cart).length ?
                    <div>
                        <div className="">
                            {createList()}
                        </div>
                        <Link className="btn btn-primary mb-3" to="/checkout">checkout</Link>
                    </div>
                :
                    <div>
                        <p>your cart is empty please buy some stuff</p>
                        <Link className="btn btn-primary mb-3" to="/">start shopping</Link>
                    </div>

                }
                </div>
            </div>
        </div>

    );
}

