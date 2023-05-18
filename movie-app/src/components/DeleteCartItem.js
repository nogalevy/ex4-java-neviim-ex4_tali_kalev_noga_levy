import {Trash3Fill} from "react-bootstrap-icons";
import {useCart} from "../contexts/CartContext";
import axios from "axios";

export default function DeleteCartItem({id}){
    const {dispatch} = useCart();

    //TODO: move to usefetch
    const deleteItem = async (id) =>{
        try{
            const res = await axios.delete('/api/cart/' + id);
            console.log("deleted " ,id, res);
            dispatch({type:'delete', payload: {id}});
        }
        catch (err){
            //TODO
        }
    }

    return (
        <div className="card-footer bg-transparent border-success">
            <button onClick={()=>deleteItem(id)}>
                <Trash3Fill/>
            </button>
        </div>
    )
}