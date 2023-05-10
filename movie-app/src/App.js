import Home from "./components/Home";
// import OtherPage from "./components/OtherPage";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PageWithData from "./components/PageWithData";
import './stylesheets/colors.css';

const App = () => {
    return (
        <div className="bg-dark text-light w-100 h-100">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu/>}>
                        <Route index element={<Home/>}/>
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
