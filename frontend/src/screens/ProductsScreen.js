import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/productComponents/Rating";
import Pagination from "../components/productComponents/Pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from './../Redux/Actions/ProductActions';
import Loading from '../components/LoadingError/Loading';
import Message from "../components/LoadingError/Error";

const ProductsScreen = () => {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch]);
    return (
        <>
            <Header />
            <div className="page-title-area">
                <img src="/images/footer-car.png" alt="Title" />
                <div className="container">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>Products</h2>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </li>
                                <li>Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                <div className="col-12 d-flex align-items-center">
                    <form className="input-group">
                        <input
                            type="search"
                            className="form-control rounded search"
                            placeholder="Search"
                        />
                        <button type="submit" className="search-button">
                            search
                        </button>
                    </form>
                </div>
            </div>
            <div class="sorting-menu">
                <ul>
                    <li class="filter active" data-filter="all">all</li>
                    <li class="filter" data-filter=".audio">audio</li>
                    <li class="filter" data-filter=".battery">battery</li>
                    <li class="filter" data-filter=".exterior">exterior</li>
                    <li class="filter" data-filter=".interior">interior</li>
                    <li class="filter" data-filter=".lighting">lighting</li>
                    <li class="filter" data-filter=".oil">oils & Lubricants</li>
                    <li class="filter" data-filter=".wheels">wheels & tires</li>
                </ul>
            </div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 article">
                            <div className="shopcontainer row">
                                {
                                    loading ? <Loading />
                                        : error ? <Message variant="alert-danger">{error}</Message>
                                            :
                                            (
                                                <>
                                                    {products.map((product) => (
                                                        <div
                                                            className="shop col-lg-4 col-md-6 col-sm-6"
                                                            key={product._id}
                                                        >
                                                            <div className="border-product">
                                                                <Link to={`/products/${product._id}`}>
                                                                    <div className="shopBack">
                                                                        <img src={product.image} alt={product.name} />
                                                                    </div>
                                                                </Link>

                                                                <div className="shoptext">
                                                                    <p>
                                                                        <Link to={`/products/${product._id}`}>
                                                                            {product.name}
                                                                        </Link>
                                                                    </p>

                                                                    <Rating
                                                                        value={product.rating}
                                                                        text={`${product.numReviews} reviews`}
                                                                    />
                                                                    <h3>Rs.{product.price}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            )
                                }
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default ProductsScreen;