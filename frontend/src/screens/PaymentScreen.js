import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from './../Redux/Actions/CartActions';

const PaymentScreen = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    if (!cartItems) {
        history("/cart");
    }

    const [paymentMethod, setPaymentMethod] = useState("Paypal")

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        history("/placeorder");
    }

    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form
                    className="Login2 col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>SELECT PAYMENT METHOD</h6>
                    <div className="payment-container">
                        <div className="radio-container">
                            <input className="form-check-input" type="radio" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label className="form-check-label">PayPal</label>
                        </div>
                    </div>

                    <button type="submit">
                        Continue
                    </button>
                </form>
            </div>
        </>
    );
};

export default PaymentScreen;