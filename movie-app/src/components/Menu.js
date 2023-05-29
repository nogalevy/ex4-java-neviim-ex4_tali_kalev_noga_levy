import {Link} from 'react-router-dom';
import {Outlet} from "react-router";
import {Action, GET_CART_API, TRENDING_PAGE} from "../consts/consts";
import {useCart} from "../contexts/CartContext";
import {useEffect, useReducer, useState} from "react";
import useFetch from "./useFetch";
import {useMoviesContext} from "../contexts/MoviesContext";
import listReducer from "../reducers/listReducer";
import Search from "./Search";
import CartNavItem from "./CartNavItem";
import createMovieApiUrl from "./movieApiUrl";

/**
 *
 * @returns {JSX.Element} that displays the navbar and all the components within
 * @constructor
 */
export default function Menu() {
    const [url, setUrl] = useState(createMovieApiUrl(TRENDING_PAGE))
    const { error, isPending, data } = useFetch(url);
    const [genreState, genreDispatch] = useReducer(listReducer, { list: [] });
    const {setMoviesData} = useMoviesContext()
    const {dispatch} = useCart();
    const {data : cartData} = useFetch(GET_CART_API)

    /**
     * on first load, retrieve cartData from api to display in card page
     */
    useEffect(()=>{
        if (cartData){
            dispatch({type: Action.INIT, payload: cartData})
        }
    },[cartData])

    /**
     * on change of movie data fetched from movie api, sets context of movie data for display on home page
     */
    useEffect(() => {
        setMoviesData({error, isPending, data})
    }, [error, isPending, data])

    /**
     * removes all chosen genres, fetches trending page
     */
    const handleHomeClick = () => {
        genreDispatch({ type: Action.CLEAR});
        setUrl(createMovieApiUrl(TRENDING_PAGE))
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
                        // aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <CartNavItem/>
                    </ul>
                    <Search genreState={genreState} genreDispatch={genreDispatch} setUrl={setUrl}/>
                </div>
            </div>
        </nav>
        <Outlet />
    </>
    );
}

