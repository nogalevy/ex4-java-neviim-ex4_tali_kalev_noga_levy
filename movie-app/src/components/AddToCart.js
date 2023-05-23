import axios from "axios";
import {useCart} from "../contexts/CartContext";
import {PRICE} from "../consts/consts";
import DeleteCartItem from "./DeleteCartItem";


const AddToCart = ({inCart, setInCart, itemData, index}) => {
    const {state, dispatch} = useCart();

    const addToCart = async() =>{
        let inCart = !!state.cart[itemData.id];
        if(state.cart.length !== 0 && inCart) return;

        try{
            let res = await axios.post('/api/cart', {...itemData, price: PRICE});
            console.log(res);
            dispatch({type: 'add' , payload: res.data });
            setInCart(true);
        }
        catch (err){
            console.log("err", err)
        }
    }

    return (
        //NOGA: old :
        //TODO: maybe add to css file
        // <div style={{zIndex: 2}} className="bottom-0 end-0 position-absolute card-footer border-0 bg-transparent">
        //     <button onClick={addToCart} className="btn text-light ">
        //         { inCart ? <CheckCircleFill size={25}/> : <PlusCircleFill size={25}/> }
        //     </button>
        // </div>
        // NOGA: new :
        <div className="add">
            <div className="h-100 row align-items-center justify-content-center ">
                {
                    !inCart ?
                    <button onClick={addToCart} className="btn btn-light w-75">
                        Add to cart
                    </button>
                    :
                    //     NOGA:
                    <div className="d-flex justify-content-center">
                        {/*<DeleteCartItem id={itemData.id}/>*/}
                        <div className="btn btn-success w-75">
                            added!
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default AddToCart;
