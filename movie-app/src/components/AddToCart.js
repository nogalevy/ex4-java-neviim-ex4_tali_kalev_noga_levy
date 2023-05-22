import { PlusCircleFill } from "react-bootstrap-icons";
import axios from "axios";
import {useCart} from "../contexts/CartContext";

const PRICE = "3.99"; //TODO: move

const AddToCart = ({itemData, index}) => {
    const {state, dispatch} = useCart();

    const addToCart = async() =>{
        let inCart = !!state.cart[itemData.id];
        if(state.cart.length !== 0 && inCart) return;

        try{
            let res = await axios.post('/api/cart', {...itemData, price: PRICE});
            console.log(res);
            dispatch({type: 'add' , payload: res.data });
        }
        catch (err){
            console.log("err", err)
        }
    }

    return (
        //TODO: maybe add to css file
        <div style={{zIndex: 2}} className="bottom-0 end-0 position-absolute card-footer">
            <button onClick={addToCart} className="btn text-light">
                <PlusCircleFill size={25}/>
            </button>
        </div>
    );
};

export default AddToCart;
