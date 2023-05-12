import Home from "./components/Home";
// import OtherPage from "./components/OtherPage";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PageWithData from "./components/PageWithData";
import './stylesheets/colors.css';
import {useState} from "react";

const App = () => {
    const[searchValue, setSearchValue] = useState('');

    const handleSearchSubmit = (value) => {
        setSearchValue(value)
    }

    return (
        <div className="bg-dark text-light w-100 h-100">
            <BrowserRouter>
                <Routes>
                    {/*Tali: question, why this hierarchy?*/}
                    <Route path="/" element={<Menu handleSearchSubmit={handleSearchSubmit}/>}>
                        <Route index element={<Home searchValue={searchValue}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        {/*<Route path="/checkout" element={<Checkout/>}/>*/}
                        <Route path={"*"} element={<NotFound/>}/>
                        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
