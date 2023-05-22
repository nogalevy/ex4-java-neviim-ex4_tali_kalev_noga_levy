import {Link} from 'react-router-dom';
import {Outlet} from "react-router";
import Search from "./Search";
import {useCart} from "../contexts/CartContext";   
import {useEffect, useReducer} from "react";
import axios from "axios";
import genreReducer from "../reducers/genreReducer";
import useFetch from "./useFetch";
import {useMoviesContext} from "../contexts/MoviesContext";
import {TRENDING_PAGE} from "../consts/consts";

//todo this is in two places, move to consts, want to debate with you where we should call this trending page on the first time,
//current on load search sets trending page as default and genre page sets null and only does something with data if genres checked > 0
// const TRENDING_PAGE = '/trending/all/week?&language=en-US';

export default function Menu() {
    // const {state} = useCart()
    const [genreState, genreDispatch] = useReducer(genreReducer, { genres: [] });
    const { error, isPending, data } = useFetch(TRENDING_PAGE);
    const {setMoviesData} = useMoviesContext()

    const {state, dispatch} = useCart();

    useEffect(()=>{
        async function getCart(){
            try{
                let res = await axios('/api/cart');
                // dispatch({type :'init', payload: Object.values(res.data)})
                dispatch({type :'init', payload: res.data})
            }
            catch (e) {
            }
        }
        getCart()
    },[])

    const handleHomeClick = () => {
        clearGenres()
        setMoviesData({error, isPending, data}) //always trending page
    }

    const clearGenres = () => {
        console.log("clearing genres...")
        genreDispatch({ type: 'clear'});
    }

    return (
        <>
        <nav className="shadow p-3 mb-5 rounded navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand" onClick={handleHomeClick}>
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
                            {/*TODO: fix in small screen*/}
                            <Link className="me-4 nav-link position-relative" to="/cart">Cart
                                {Object.keys(state.cart).length ?
                                <span
                                    className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">
                                        {Object.keys(state.cart).length}
                                    <span className="visually-hidden">unread messages</span>
                                </span> : ""}
                            </Link>
                        </li>
                        {/*<GenreSearch/>*/}
                    </ul>
                    <Search clearGenres={clearGenres} state={genreState} dispatch={genreDispatch}/>

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

