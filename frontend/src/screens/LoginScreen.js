import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from 'react-redux';
import { login } from './../Redux/Actions/UserActions';
import Message from "../components/LoadingError/Error";
import Loading from './../components/LoadingError/Loading';

const LoginScreen = (location) => {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo } = userLogin;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (userInfo) {
            history(redirect)
        }
    }, [userInfo, history, redirect])

    return (
        <>
            <Header />
            {/* <div className="page-title-area">
                <img src="/images/footer-car.png" alt="Title" />
                <div className="container">
                    <div className="page-title-content">
                        <h2>Login</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">

                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}

                <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    <br></br>
                    <br></br>
                    <span style={{ float: "left" }}><Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>Register Now</Link></span>
                    <span style={{ float: "right" }}>Forgot <Link to="#">password?</Link></span>
                </form>
            </div>
            <Footer />
        </>

    );
};

export default LoginScreen;