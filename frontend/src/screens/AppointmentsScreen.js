import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AppointmentsScreen = () => {
    return (
        <>
            <Header />
            <div className="page-title-area">
                <img src="/images/footer-car.png" alt="Title" />
                <div className="container">
                    <div className="page-title-content">
                        <h2>Appointments</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AppointmentsScreen;