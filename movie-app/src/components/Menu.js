import {Link, useNavigate} from 'react-router-dom';
import {Outlet} from "react-router";
import Search from "./Search";
import {useCart} from "../contexts/CartContext";
import {useEffect, useReducer, useState} from "react";
import axios from "axios";
import useFetch from "./useFetch";
import {useMoviesContext} from "../contexts/MoviesContext";
import {Action, TRENDING_PAGE} from "../consts/consts";
import listReducer from "../reducers/listReducer";
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
    const navigate = useNavigate ();
    const {dispatch} = useCart();

    /**
     * on first load - inits cart data from api
     */
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
        getCart(); //NOGA: ?????????????????????????????????????????????????????
    },[])

    /**
     * on change of movie data fetched from movie api, sets context of movie data for display on home page
     */
    useEffect(() => {
        navigate('/');
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
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        {/*<li className="nav-item">*/}
                        {/*    /!*TODO: fix in small screen*!/*/}
                        {/*    <Link className="me-4 nav-link position-relative" to="/cart">Cart*/}
                        {/*        {Object.keys(state.cart).length ?*/}
                        {/*        <span*/}
                        {/*            className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">*/}
                        {/*                {Object.keys(state.cart).length}*/}
                        {/*            <span className="visually-hidden">unread messages</span>*/}
                        {/*        </span> : ""}*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <CartNavItem/>
                    </ul>
                    <Search genreState={genreState} genreDispatch={genreDispatch} setUrl={setUrl}/>

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

