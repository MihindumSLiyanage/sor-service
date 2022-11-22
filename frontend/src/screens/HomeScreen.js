import React from "react";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <Header />

            {/* SlideShow  */}
            <div className="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
                <ol className="carousel-indicators">
                    <li className="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
                    <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
                    <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img alt="First slide" className="d-block w-100" src="/images/slider/slide01.jpg" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Welcome</h5>
                            <p className="animated bounceInLeft" style={{ animationDelay: '2s' }}>Lorem ipsum dolor sit amet,
                                consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                ut aliquid ex ea commodi consequatur</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img alt="Second slide" className="d-block w-100" src="/images/slider/slide02.jpg" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="animated slideInDown" style={{ animationDelay: '1s' }}>Make an Appointment</h5>
                            <p className="animated fadeInUp" style={{ animationDelay: '2s' }}>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                            <p className="animated zoomIn" style={{ animationDelay: '3s' }}><Link
                                to="/appointment">Appointments</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img alt="Third slide" className="d-block w-100" src="/images/slider/slide03.jpg" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="animated zoomIn" style={{ animationDelay: '1s' }}>Make an Account</h5>
                            <p className="animated fadeInLeft" style={{ animationDelay: '2s' }}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                            <p className="animated zoomIn" style={{ animationDelay: '3s' }}><Link to="#">Accounts</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Working Process */}
            <div className="process-area pt-100 pb-70" id="process" style={{ backgroundColor: '#f6f4f4' }}>
                <br></br>
                <div className="title">
                    <h2 className="titletext"><span>O</span>ur Working Process</h2>
                </div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="process-shape">
                            <img src="/images/car-shadow.png" alt="Shape" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="process-item">
                                        <div className="process-inner process-one">
                                            <i><span className="iconify" data-icon="bxs:car-mechanic"></span></i>
                                            <h3>Identify Problems</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                        <div className="process-inner">
                                            <i><span className="iconify" data-icon="bxs:car-crash"></span></i>
                                            <h3>Start Servicing</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="process-item">
                                        <div className="process-img">
                                            <img src="/images/tyre.png" alt="Process" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="process-item">
                                        <div className="process-inner process-two">
                                            <i><span className="iconify" data-icon="bxs:car-garage"></span></i>
                                            <h3>Trial For Make Sure</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                        <div className="process-inner process-three">
                                            <i><span className="iconify" data-icon="bxs:car-wash"></span></i>
                                            <h3>Payment Service</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>

            {/* Working Process */}
            <div className="services" id="services">
                <div className="title">
                    <h2 className="titletext"><span>O</span>ur Services</h2>
                </div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/images/services/1.jpg" alt="Service" />
                                </div>
                                <div className="service-content">
                                    <i><span className="iconify" data-icon="bxs:car"></span></i>
                                    <h3>Tyre Service</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/images/services/2.jpg" alt="Service" />
                                </div>
                                <div className="service-content">
                                    <i><span className="iconify" data-icon="bxs:wrench"></span></i>
                                    <h3>Engine Service</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/images/services/3.jpg" alt="Service" />
                                </div>
                                <div className="service-content">
                                    <i><span className="iconify" data-icon="bxs:car-garage"></span></i>
                                    <h3>Tuning Service</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/images/services/4.jpg" alt="Service" />
                                </div>
                                <div className="service-content">
                                    <i><span className="iconify" data-icon="bxs:car-mechanic"></span></i>
                                    <h3>Motor Service</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/images/services/5.jpg" alt="Service" />
                                </div>
                                <div className="service-content">
                                    <i><span className="iconify" data-icon="bxs:car-crash"></span></i>
                                    <h3>System Service</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="/images/services/6.jpg" alt="Service" />
                                </div>
                                <div className="service-content">
                                    <i><span className="iconify" data-icon="bxs:car-wash"></span></i>
                                    <h3>Washing Service</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>

            {/* Products */}
            <div className="products" id="products" style={{ backgroundColor: '#f6f4f4' }}>
                <div className="title">
                    <h2 className="titletext"><span>P</span>roducts Categories</h2>
                </div>
                <br></br>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="parts-item">
                                <Link to="/products">
                                    <div className="parts-top">
                                        <img src="/images/products/categories/audio.png" alt="Parts" />
                                    </div>
                                    <h3>Audio Parts</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="parts-item">
                                <Link to="/products">
                                    <div className="parts-top">
                                        <img src="/images/products/categories/batteries.jpg" alt="Parts" height="80px" width="120px" />
                                    </div>
                                    <h3>Batteries</h3>
                                </Link>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="parts-item">
                                <Link to="/products">

                                </Link>
                                <div className="parts-top">
                                    <img src="/images/products/categories/exterior.png" alt="Parts" />
                                </div>
                                <h3>Exterior Parts</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="parts-item">
                                <Link to="/products">
                                    <div className="parts-top">
                                        <img src="/images/products/categories/interior.png" alt="Parts" />
                                    </div>
                                    <h3>Interior Parts</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="parts-item">
                                <Link to="/products">
                                    <div className="parts-top">
                                        <img src="/images/products/categories/lights.png" alt="Parts" />
                                    </div>
                                    <h3>Lights</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="parts-item">
                                <Link to="/products">
                                    <div className="parts-top">
                                        <img src="/images/products/categories/oil.jpg" alt="Parts" height="80px" width="120px" />
                                    </div>
                                    <h3>Oils & Lubricants</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="parts-item">
                                <Link to="/products">
                                    <div className="parts-top">
                                        <img src="/images/products/categories/wheels.png" alt="Parts" />
                                    </div>
                                    <h3>Wheels & Tires</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="parts-item">
                                <Link to="/products">
                                    <div className="parts-top">
                                        <img src="/images/products/categories/repair-parts.png" alt="Parts" />
                                    </div>
                                    <h3>Repair Parts</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeScreen;
