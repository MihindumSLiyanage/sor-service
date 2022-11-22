import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AboutScreen = () => {
    return (
        <>
            <Header />
            <div className="page-title-area">
                <img src="/images/footer-car.png" alt="Title" />
                <div className="container">
                    <div className="page-title-content">
                        <h2>About Us</h2>
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
            <section className="quality-area quality-area-four pt-100">
                <div className="quality-shape">
                    <img src="/images/car-shape.png" alt="Quality" />
                </div>
                <div className="container-fluid p-0">
                    <div className="row m-0 align-items-center">
                        <div className="col-lg-6 p-0">
                            <div className="quality-img">
                                <img src="/images/about-car.jpg" alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="quality-content">
                                <div className="section-title">
                                    <h2>Quality Work is Our First Priority </h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                        viverra maecenas accumsan lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AboutScreen;