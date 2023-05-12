import {Link} from 'react-router-dom';
import {Outlet} from "react-router";
import {useState} from "react";
import Search from "./Search";

export default function Menu({handleSearchSubmit}) {

    return (
        <>
        <nav className="shadow p-3 mb-5 rounded navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Movies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">cart</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="\">Movies</a></li>
                                <li><a className="dropdown-item" href="\">TV</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="\">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <Search handleSearchSubmit={handleSearchSubmit}/>
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

