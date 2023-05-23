import {Link} from 'react-router-dom';
import {useCart} from "../contexts/CartContext";
import axios from "axios";
import CartItemCard from "./CartItemCard";

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
                <h3 className="">cart</h3>
                {Object.keys(state.cart).length ?
                    <div>
                        <div className="">
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

