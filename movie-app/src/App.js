import Home from "./components/Home";
// import OtherPage from "./components/OtherPage";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PageWithData from "./components/PageWithData";
import './stylesheets/colors.css';
import { MoviesProvider } from "./contexts/MoviesContext";
import {CartProvider} from "./contexts/CartContext";

const App = () => {
    return (
        <div className="bg-dark text-light w-100 min-vh-100">
            {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>*/}
            <CartProvider>
                <MoviesProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Menu />}>
                                <Route index element={<Home />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path={"*"} element={<NotFound />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </MoviesProvider>
            </CartProvider>
        </div>
    );
};

export default App;
