import { React, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from './../Redux/Actions/CartActions';

const CartScreen = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    //const params = useParams();
    //const productId = params.id;
    //const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const { id } = useParams();
    const { search } = useLocation();

    const productId = id;
    const qty = search ? Number(search.split("=")[1]) : 1;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    const total = cartItems?.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);

    const checkOutHandler = () => {
        if (!userInfo) {
            history('/login')
        } else {
            history('/payment')
        }
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <>
            <Header />
            <div className="page-title-area">
                <img src="/images/footer-car.png" alt="Title" />
                <div className="page-title-content">
                    <h2>Cart</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </li>
                        <li>
                            Cart
                        </li>
                    </ul>
                </div>

            </div>
            <div className="container">
                {
                    cartItems?.length === 0 ? (
                        <div className=" alert alert-info text-center mt-3">
                            Your cart is empty
                            <Link
                                className="btn btn-success mx-5 px-5 py-3"
                                to="/products"
                                style={{
                                    fontSize: "12px",
                                }}
                            >
                                GO BACK
                            </Link>
                        </div>
                    )
                        :
                        (
                            <>
                                <div className=" alert alert-info text-center mt-3">
                                    Total Cart Products
                                    <Link className="text-success mx-2" to="/cart">
                                        ({cartItems.length})
                                    </Link>
                                </div>
                                {/* cartiterm */}
                                {
                                    cartItems?.map((item, index) => (
                                        <div className="cart-iterm row" key={index}>
                                            <div onClick={() => removeFromCartHandler(item.product)} className="remove-button d-flex justify-content-center align-items-center">
                                                <i className="fas fa-times"></i>
                                            </div>
                                            <div className="cart-image col-md-3">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="cart-text col-md-5 d-flex align-items-center">
                                                <Link to={`/products/${item.product}`}>
                                                    <h4>{item.name}</h4>
                                                </Link>
                                            </div>
                                            <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                                                <h6>QUANTITY</h6>
                                                <select value={item.qty}
                                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                    {[...Array(item.countInStock).keys()]?.map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                                                <h6>PRICE</h6>
                                                <h4>Rs. {item.price}</h4>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* End of cart iterms */}
                                <div className="total">
                                    <span className="sub">total:</span>
                                    <span className="total-price">Rs. {total}</span>
                                </div>
                                <hr />
                                <div className="cart-buttons d-flex align-items-center row">
                                    <Link to="/products" className="col-md-6 ">
                                        <button>Continue To Shopping</button>
                                    </Link>
                                    {
                                        total > 0 && (
                                            <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                                                <button onClick={checkOutHandler}>
                                                    Checkout
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            </>
                        )
                }
            </div>
            <Footer />
        </>
    );
};

export default CartScreen;