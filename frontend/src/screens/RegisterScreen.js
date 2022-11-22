import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { register } from './../Redux/Actions/UserActions';
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";

const RegisterScreen = (location) => {
    const history = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userRegister = useSelector((state) => state.userRegister)
    const { error, loading, userInfo } = userRegister;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password))
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
                        <h2>Register</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li><Link to="/login">Login</Link></li>
                            <li>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li>Register</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">

                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}

                <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">Register</button>
                    <p>
                        I Have Account
                        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                            <strong> Login</strong>
                        </Link>
                    </p>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default RegisterScreen;