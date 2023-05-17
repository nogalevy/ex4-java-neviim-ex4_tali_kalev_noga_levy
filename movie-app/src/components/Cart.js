import { useState } from "react";
import {Link} from 'react-router-dom';
import {useCart} from "../contexts/CartContext";
import {Trash3Fill} from 'react-bootstrap-icons';
import axios from "axios";

export default function Cart(props) {
    const {state, dispatch} = useCart();

    const deleteItem = async (id) =>{
        try{
            const res = await axios.delete('/api/cart/' + id);
            console.log("deleted " ,id, res);
            dispatch({type:'delete', payload: {id}});
        }
        catch (err){

        }
    }

    const createList = () => {
        return state && state.cart && state.cart.map((element) => {
            // TODO: fix (?)
            let img = element.poster_path || element.backdrop_path;
            return (
                //NOGA: move to new component
                <div key={element.id} className="card mb-3 text-bg-light" style={{
                    maxWidth: "540px"
                }}>
                    <div className="row g-0 ">
                        <div className="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500${img}`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                {/*TODO : fix this || (we have the save thing in Home component)*/}
                                <h5 className="card-title">{element.name || element.title || "unknown name"}</h5>
                                <p className="card-text">{element.price}$</p>
                            </div>
                            <div className="card-footer bg-transparent border-success">
                                <button onClick={()=>deleteItem(element.id)}>
                                    <Trash3Fill/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
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

