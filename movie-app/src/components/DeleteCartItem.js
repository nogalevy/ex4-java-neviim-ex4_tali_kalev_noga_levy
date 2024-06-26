import {useState} from "react";
import axios from "axios";
import toastify from "../utils/toastify";
import {Trash3Fill} from "react-bootstrap-icons";
import {DELETE_FROM_CART_FAIL_MSG, Action} from "../consts/consts";
import {useCart} from "../contexts/CartContext";
import Spinner from "./Spinner";

export default function DeleteCartItem({id}){
    const [isLoading, setIsLoading] = useState(false);
    const {dispatch} = useCart();

    /**
     * remove the items from list
     * @param id id of the movie we want to remove
     * @returns {Promise<void>}
     */
    const deleteItem = async (id) =>{
        if(isLoading) return;
        setIsLoading(true)
        try{
            const res = await axios.delete('/api/cart/' + id);
            dispatch({type: Action.DELETE, payload: {id}});
        }
        catch (err){
            toastify.errorToast(DELETE_FROM_CART_FAIL_MSG);
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <button onClick={()=>deleteItem(id)} className="btn btn-light">
            {isLoading ? <Spinner/> : <Trash3Fill/>}
        </button>
    )
}