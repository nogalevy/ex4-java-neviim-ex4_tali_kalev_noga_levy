import {Trash3Fill} from "react-bootstrap-icons";
import {useCart} from "../contexts/CartContext";
import axios from "axios";
import toastify from "../consts/toastify";
import {DELETE_FROM_CART_FAIL_MSG} from "../consts/consts";
import {useState} from "react";
import Spinner from "./Spinner";

export default function DeleteCartItem({id}){
    const [isLoad, setIsLoad] = useState(false);
    const {dispatch} = useCart();

    //TODO: move to usefetch
    const deleteItem = async (id) =>{
        setIsLoad(true)
        try{
            const res = await axios.delete('/api/cart/' + id);
            console.log("deleted " ,id, res);
            dispatch({type:'delete', payload: {id}});
        }
        catch (err){
            toastify.errorToast(DELETE_FROM_CART_FAIL_MSG);
        }
        finally {
            setIsLoad(false)
        }
    }

    return (
        <button onClick={()=>deleteItem(id)} className="btn btn-light">
            {isLoad ? <Spinner/> : <Trash3Fill/>}
        </button>
    )
}