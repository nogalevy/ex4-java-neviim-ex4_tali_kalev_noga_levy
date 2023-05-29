import axios from "axios";
import {useCart} from "../contexts/CartContext";
import {ADD_TO_CART_FAIL_MSG, PRICE, Action} from "../consts/consts";
import toastify from "../consts/toastify";

const AddToCart = ({inCart, setInCart, itemData}) => {
    const {state, dispatch} = useCart();

    const addToCart = async() =>{
        let inCart = !!state.cart[itemData.id];
        if(state.cart.length !== 0 && inCart) return;

        try{
            let res = await axios.post('/api/cart', {...itemData, price: PRICE});
            console.log(res);
            dispatch({type: Action.ADD , payload: res.data });
            setInCart(true);
        }
        catch (err){
            toastify.errorToast(ADD_TO_CART_FAIL_MSG);
        }
    }

    return (
            <div className="h-100 row align-items-center justify-content-center ">
                {
                    !inCart ?
                    <button onClick={addToCart} className="btn btn-light w-75">
                        Add to cart
                    </button>
                    :
                    <div className="d-flex justify-content-center">
                        <div className="btn btn-success w-75">
                            added!
                        </div>
                    </div>
                }
            </div>
    );
};

export default AddToCart;
