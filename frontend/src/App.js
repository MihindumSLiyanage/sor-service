import React from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from "./screens/AboutScreen";
import AppointmentsScreen from "./screens/AppointmentsScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ContactScreen from "./screens/ContactScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import PrivateRouter from "./PrivateRouter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/appointment" element={<AppointmentsScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route element={<PrivateRouter />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
      </Route>
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route path="/products/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/cart/:id" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Routes>
  );
};

export default App;
