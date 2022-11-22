import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import { useSelector, useDispatch } from 'react-redux';
import Message from './../components/LoadingError/Error';
import { createOrder } from './../Redux/Actions/OrderActions';
import { ORDER_CREATE_RESET } from "../Redux/Constants/OrderConstants";

const PlaceOrderScreen = () => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    //Calculate Price
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )

    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
    cart.totalPrice = (
        Number(cart.itemsPrice) + Number(cart.taxPrice)
    ).toFixed(2);

    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, success, error } = orderCreate

    useEffect(() => {
        if (success) {
            history(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [history, dispatch, success, order]);

    const placeOrderHandler = (e) => {
        e.preventDefault();
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        )
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="row  order-detail">
                    <div className="col-lg-5 col-sm-5 mb-lg-5 mb-6 mb-sm-1">
                        <div className="row ">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i class="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Customer</strong>
                                </h5>
                                <p>{userInfo.name}</p>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="col-lg-5 col-sm-5 mb-lg-5 mb-6 mb-sm-1">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Order Info</strong>
                                </h5>
                                <p>Total Products: {cartItems.length}</p>
                                <p>Pay method: {cart.paymentMethod}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                        {
                            cart.cartItems.length === 0 ? (
                                <Message variant="alert-info mt-5">Your cart is empty</Message>
                            )
                                :
                                (
                                    <>
                                        {
                                            cart.cartItems.map((item, index) => (
                                                <div className="order-product row" key={index}>
                                                    <div className="col-md-3 col-6">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="col-md-5 col-6 d-flex align-items-center">
                                                        <Link to={`/products/${item.product}`}>
                                                            <h6>{item.name}</h6>
                                                        </Link>
                                                    </div>
                                                    <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                                                        <h4>QUANTITY</h4>
                                                        <h6>{item.qty}</h6>
                                                    </div>
                                                    <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                                                        <h4>SUBTOTAL</h4>
                                                        <h6>Rs. {item.qty * item.price}</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                                )
                        }

                    </div>
                    {/* total */}
                    <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Price</strong>
                                    </td>
                                    <td>Rs. {cart.itemsPrice}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Tax</strong>
                                    </td>
                                    <td>Rs. {cart.taxPrice}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Final</strong>
                                    </td>
                                    <td>Rs. {cart.totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            cart.cartItems.length === 0 ? null : (
                                <button type="submit" onClick={placeOrderHandler}>
                                    PLACE ORDER
                                </button>
                            )
                        }
                        {
                            error && (
                                <div className="my-3 col-12">
                                    <Message variant="alert-danger">{error}</Message>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceOrderScreen;
