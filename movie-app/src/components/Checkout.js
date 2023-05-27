import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toastify from "../consts/toastify";
import {useCart} from "../contexts/CartContext";
import {PRICE, PURCHASE_SUCCESS_MSG, PURCHASE_FAIL_MSG} from "../consts/consts";
import '../stylesheets/colors.css';

/**
 *
 * @returns {JSX.Element} displaying Checkout page
 * @constructor
 */
export default function Checkout() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const {state, dispatch} = useCart();


    /**
     *
     * @param e event
     * @returns {Promise<void>}
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            payment: Object.keys(state.cart).length * PRICE
        };

        try {
            let res = await axios.post("/api/purchases", data);
            console.log(res);
            navigate("/");
            dispatch({type :'clear'})
            toastify.successToast(PURCHASE_SUCCESS_MSG)
        } catch (err) {
            console.log("Error:", err);
            toastify.errorToast(PURCHASE_FAIL_MSG)
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h2>Checkout</h2>
            <h4 className="mb-4">Purchase Total: {Object.keys(state.cart).length * PRICE}</h4>
            <form className="m-auto form-floating text-dark" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-floating mb-3 col-sm">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingFirst"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="floatingFirst">First Name</label>
                    </div>
                    <div className="form-floating mb-3 col">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingLast"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="floatingLast">Last Name</label>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="col-12 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
