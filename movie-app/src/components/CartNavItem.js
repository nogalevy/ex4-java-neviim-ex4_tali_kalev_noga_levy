import {Link} from "react-router-dom";
import {useCart} from "../contexts/CartContext";

export default function CartNavItem(){
    const {state} = useCart();

    return (
        <li className="nav-item">
            {/*TODO: fix in small screen*/}
            <Link className="me-4 nav-link position-relative" to="/cart">Cart
                {/*<CartFill size={20}/>*/}
                {Object.keys(state.cart).length ?
                    <span className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">
                       {Object.keys(state.cart).length}
                    </span> : ""}
            </Link>
        </li>
    )
}