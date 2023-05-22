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
        <>
            <h3>cart</h3>
            <div className="m-auto">
                {createList()}
            </div>
            <Link className="btn btn-primary mb-3" to="/checkout">checkout</Link>
        </>

    );
}

