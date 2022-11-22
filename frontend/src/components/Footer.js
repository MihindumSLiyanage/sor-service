import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                        <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p><i className="fa fa-location-arrow"></i> No 81, Mallawapitiya, Kurunegala </p>
                        <p><i className="fa fa-phone"></i> 037 22 30546 </p>
                        <p><i className="fa fa fa-envelope"></i> sorservices@gmail.com </p>
                    </div>
                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                        <ul className="footer_ul_amrc">
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Appointments</Link></li>
                            <li><Link to="#">Products</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Services</h5>
                        <ul className="footer_ul_amrc">
                            <li><Link to="#">Automobile</Link></li>
                            <li><Link to="#">Tyre Service</Link></li>
                            <li><Link to="#">Repair Service</Link></li>
                            <li><Link to="#">Engine Service</Link></li>
                            <li><Link to="#">System Service</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h5 className="headin5_amrc col_white_amrc pt2">Newsletter</h5>
                        <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque
                            temporibus.</p>
                        <div className="p-1 rounded border">
                            <div className="input-group">
                                <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1"
                                    className="form-control border-0 shadow-0" />
                                <div className="input-group-append">
                                    <button id="button-addon1" type="submit" class="btn btn-link"><i
                                        className="fa fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <p className="text-center">Copyright @2022 | Designed With by <Link href="#">Mihindum Liyanage</Link></p>
                        <ul className="social_footer_ul">
                            <li>
                                <Link href="#" target="_blank" role="button" style={{ backgroundColor: '#3b5998' }}>
                                    <i className="fab fa-facebook-f" ></i>
                                </Link>
                                <Link href="#" target="_blank" role="button" style={{ backgroundColor: '#55acee' }}>
                                    <i className="fab fa-twitter" ></i>
                                </Link>
                                <Link href="#" target="_blank" role="button" style={{ backgroundColor: '#0A66C2' }}>
                                    <i className="fab fa-linkedin" ></i>
                                </Link>
                                <Link href="#" target="_blank" role="button" style={{ backgroundColor: '#fb3958' }}>
                                    <i className="fab fa-instagram" ></i>
                                </Link>
                            </li>
                        </ul>
                    </div >
                </div>
            </div>
        </div>

    );
};

export default Footer;
