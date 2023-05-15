import Home from "./components/Home";
// import OtherPage from "./components/OtherPage";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PageWithData from "./components/PageWithData";
import './stylesheets/colors.css';
import {useState} from "react";
import {CartProvider} from "./contexts/CartContext";
// import {useCart} from "./contexts/CartContext";


const App = () => {
    // const {state} = useCart()
    //TODO: move this to search (?)
    const[searchValue, setSearchValue] = useState('');

    const handleSearchSubmit = (value) => {
        setSearchValue(value)
    }
    //tali: thoughts - lets say we want to wrap menu and home with search context provider?
    //is this a good idea, do we need to change the hierarchical order?
    return (
        <div className="bg-dark text-light w-100 min-vh-100">
        <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Menu handleSearchSubmit={handleSearchSubmit}/>}>
                            <Route index element={<Home searchValue={searchValue}/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/checkout" element={<Checkout/>}/>
                            <Route path={"*"} element={<NotFound/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
};

export default App;
