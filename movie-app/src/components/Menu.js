import {Link} from 'react-router-dom';
import {Outlet} from "react-router";
import Search from "./Search";
import {useCart} from "../contexts/CartContext";   
import GenreSearch from "./GenreSearch";
import {useEffect} from "react";
import axios from "axios";

export default function Menu() {
    // const {state} = useCart()

    const {state, dispatch} = useCart();

    useEffect(()=>{
        async function getCart(){
            try{
                let res = await axios('/api/cart');
                dispatch({type :'init', payload: Object.values(res.data)})
            }
            catch (e) {
            }
        }
        getCart()
    },[])

    return (
        <>
        <nav className="shadow p-3 mb-5 rounded navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <Link className="nav-link" to="/">TNDB</Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link position-relative" to="/cart">Cart
    {state.cart.length ?
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {state.cart.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span> : ""}
                            </Link>
                        </li>
                        <GenreSearch/>
                    </ul>

                    <Search/>
                </div>
            </div>
        </nav>
        <Outlet />
    </>

    // <div>
    //     <h1>An example of browser-router</h1>
    //
    //     <Link to="/">Home</Link> {' '} | {' '}
    //     <Link to="/otherpage">Other page</Link> {' '} | {' '}
    //     <Link to="/params/12">Params page</Link>
    //
    //     {/* An <Outlet> renders whatever child route is currently active,
    //       so you can think about this <Outlet> as a placeholder for
    //       the child routes we defined above. */}
    //     <Outlet />
    //
    // </div>
    );
}

