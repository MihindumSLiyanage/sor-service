import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/productComponents/Rating";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { listProductDetails, createProductReview } from "../Redux/Actions/ProductActions";
import Loading from './../components/LoadingError/Loading';
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import moment from "moment";

const ProductScreen = () => {
    const history = useNavigate();

    const [qty, setQty] = useState(1);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const params = useParams();

    const dispatch = useDispatch();
    const productId = params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const productCreateReview = useSelector((state) => state.productCreateReview);
    const {
        loading: loadingCreateReview,
        error: errorCreateReview,
        success: successCreateReview,
    } = productCreateReview;

    useEffect(() => {
        if (successCreateReview) {
            alert("Review submited");
            setRating(0);
            setComment("");
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
        }
        dispatch(listProductDetails(productId))
    }, [dispatch, productId, successCreateReview]);

    const AddToCartHandler = (e) => {
        e.preventDefault()
        history(`/cart/${productId}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createProductReview(productId, {
                rating,
                comment,
            })
        );
    };

    return (
        <>
            <Header />
            <div className="page-title-area">
                <img src="/images/footer-car.png" alt="Title" />
                <div className="container">
                    <div className="page-title-content">
                        <h2>Product Details</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </li>
                            <li><Link to="/products">Products</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container single-product">
                {
                    loading ? (
                        <Loading />
                    )
                        : error ? (
                            <Message variant="alert-danger">{error}</Message>
                        )
                            :
                            (
                                <>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-image">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="product-dtl">
                                                <div className="product-info">
                                                    <div className="product-name">{product.name}</div>
                                                </div>
                                                <p>{product.description}</p>

                                                <div className="product-count col-lg-7 ">
                                                    <div className="flex-box d-flex justify-content-between align-items-center">
                                                        <h6>Price</h6>
                                                        <span>Rs.{product.price}</span>
                                                    </div>
                                                    <div className="flex-box d-flex justify-content-between align-items-center">
                                                        <h6>Status</h6>
                                                        {product.countInStock > 0 ? (
                                                            <span>In Stock</span>
                                                        ) : (
                                                            <span>unavailable</span>
                                                        )}
                                                    </div>
                                                    <div className="flex-box d-flex justify-content-between align-items-center">
                                                        <h6>Reviews</h6>
                                                        <Rating
                                                            value={product.rating}
                                                            text={`${product.numReviews} reviews`}
                                                        />
                                                    </div>
                                                    {product.countInStock > 0 ? (
                                                        <>
                                                            <div className="flex-box d-flex justify-content-between align-items-center">
                                                                <h6>Quantity</h6>
                                                                <select value={qty}
                                                                    onChange={(e) => setQty(e.target.value)}>
                                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <button onClick={AddToCartHandler} className="round-black-btn">Add To Cart</button>
                                                        </>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RATING */}
                                    <div className="row my-5">
                                        <div className="col-md-6">
                                            <h6 className="mb-3">REVIEWS</h6>
                                            {product.reviews.length === 0 && (
                                                <Message variant={"alert-info mt-3"}>No Reviews</Message>
                                            )}
                                            {product.reviews.map((review) => (
                                                <div
                                                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                                                    key={review._id}
                                                >
                                                    <strong>{review.name}</strong>
                                                    <Rating value={review.rating} />
                                                    <span>{moment(review.createdAt).calendar()}</span>
                                                    <div className="alert alert-info mt-3">
                                                        {review.comment}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6">
                                            <h6>WRITE A CUSTOMER REVIEW</h6>
                                            <div className="my-4">
                                                {loadingCreateReview && <Loading />}
                                                {errorCreateReview && (
                                                    <Message variant="alert-danger">
                                                        {errorCreateReview}
                                                    </Message>
                                                )}
                                            </div>
                                            {userInfo ? (
                                                <form onSubmit={submitHandler}>
                                                    <div className="my-4">
                                                        <strong>Rating</strong>
                                                        <select
                                                            className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                        >
                                                            <option value="">Select...</option>
                                                            <option value="1">1 - Poor</option>
                                                            <option value="2">2 - Fair</option>
                                                            <option value="3">3 - Good</option>
                                                            <option value="4">4 - Very Good</option>
                                                            <option value="5">5 - Excellent</option>
                                                        </select>
                                                    </div>
                                                    <div className="my-4">
                                                        <strong>Comment</strong>
                                                        <textarea
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                            row="3"
                                                            className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                                        ></textarea>
                                                    </div>
                                                    <div className="my-3">
                                                        <button
                                                            className="col-12 bg-black border-0 p-3 rounded text-white"
                                                            disabled={loadingCreateReview}
                                                        >
                                                            SUBMIT
                                                        </button>
                                                    </div>
                                                </form>
                                            ) : (
                                                <div className="my-3">
                                                    <Message variant={"alert-warning"}>
                                                        Please{" "}
                                                        <Link to="/login">
                                                            " <strong>Login</strong> "
                                                        </Link>{" "}
                                                        to write a review{" "}
                                                    </Message>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )
                }
            </div >
            <Footer />
        </>

    );
};

export default ProductScreen;