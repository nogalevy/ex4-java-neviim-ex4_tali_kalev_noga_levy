import {Link} from 'react-router-dom';
import {useCart} from "../contexts/CartContext";
import axios from "axios";
import CartItemCard from "./CartItemCard";
import React from "react";
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
            await axios.delete('/api/cart');
            dispatch({type: "clear"})
        }
        catch (e){
            //TODO: ?
        }
    }

    //tali: tried to add stick-top to stick purchase buttons to the right side - didnt work
    return (
        <div className="container">

            <div className="d-flex flex-column justify-content-center">
                <h2 >Your Cart</h2>
                {/*<ScrollToTop/>*/}
                    {Object.keys(state.cart).length ?
                    <div className="row">
                        <div className="col-md-8 ">
                            {createList()}
                        </div>
                        <div className="col-md-4 sticky-md-top">
                            {/*NOGA: maybe add getTotalPrice() to reducer ? */}
                            <h3>Total items: {Object.keys(state.cart).length}</h3>
                            <h3>Total price: {(Object.keys(state.cart).length * PRICE).toFixed(2)}</h3>
                            <Link className="btn btn-primary me-2 mb-3 col-6" to="/checkout">Purchase</Link>
                            <button onClick={emptyCart} className="btn btn-danger mb-3 col-4">Clear All</button>
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
