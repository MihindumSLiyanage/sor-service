import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Actions/UserActions";

const Navbar = () => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        < div className="header" >
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img alt="logo" src="/images/Logo.jpg" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">
                                    Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/appointment">
                                    Appointments</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact</Link>
                            </li>
                            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                                {
                                    userInfo ? (
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="name-button dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Hi, {userInfo.name}
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/account">
                                                    Profile
                                                </Link>
                                                <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                                                    Logout
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                        : (
                                            <>
                                                <Link to="/register">
                                                    Register
                                                </Link>
                                                <Link to="/login">
                                                    Login
                                                </Link>
                                            </>
                                        )
                                }

                                <Link to="/cart">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="badge">{cartItems.length}</span>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div >
            </nav >
        </div >
    );
};
export default Navbar;