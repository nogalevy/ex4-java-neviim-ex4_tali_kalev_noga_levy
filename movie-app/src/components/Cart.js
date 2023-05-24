import {Link} from 'react-router-dom';
import {useCart} from "../contexts/CartContext";
import axios from "axios";
import CartItemCard from "./CartItemCard";
import React, { useState, useEffect } from "react";
import { ArrowBarDown } from "react-bootstrap-icons"
import "../stylesheets/colors.css"
import {PRICE} from "../consts/consts";

export default function Cart() {
    const {state, dispatch} = useCart();

    const createList = () => {
        if( !state || !state.cart ) return;
        return Object.values(state.cart).map((element) => {
            return (
                <CartItemCard key={element.id} element={element}/>
            )
        })
    }

    const emptyCart = async ()=>{
        try {
            let res = await axios.delete('/api/cart');
            dispatch({type: "clear"})
        }
        catch (e){
        }
    }

    return (
        <div className="container">

            <div className="d-flex flex-column align-items-center justify-content-center">
                <h2 >Cart</h2>
                {/*<ScrollToTop/>*/}
                    {Object.keys(state.cart).length ?
                    <div>
                        <h3>Total items: {Object.keys(state.cart).length}</h3>
                        <h3>Total price: {Object.keys(state.cart).length * PRICE}</h3>
                        <div>
                            {createList()}
                        </div>

                        <div className="row justify-content-between">
                            <Link className="btn btn-primary mb-3 col-8" to="/checkout">checkout</Link>
                            <button onClick={emptyCart} className="btn btn-danger mb-3 col-3">clear</button>
                        </div>
                    </div>
                :
                    <div>
                        <p>your cart is empty please buy some stuff</p>
                        <Link className="btn btn-primary mb-3" to="/">start shopping</Link>
                    </div>
                }
            </div>
        </div>

    );
}

//NOGA: try to do scroll btn


// import "./index.css";
//
// const ScrollToTop = () => {
//     const [showTopBtn, setShowTopBtn] = useState(false);
//     useEffect(() => {
//         window.addEventListener('scroll', toggleVisible);
//     }, []);
//
//     const toggleVisible = () => {
//         const scrolled = document.documentElement.scrollTop;
//
//         if (scrolled > 0){
//             setShowTopBtn(false)
//         }
//         else if (scrolled <= 20){
//             setShowTopBtn(true)
//         }
//     };
//     const goToTop = () => {
//         window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: "smooth",
//         });
//     };
//     return (
//         <div className="top-to-btm">
//
//             {showTopBtn && (
//                 <ArrowBarDown
//                     color="white"
//                     className="icon-position icon-style"
//                     onClick={goToTop}
//                 />
//             )}
//         </div>
//     );
// };
//
