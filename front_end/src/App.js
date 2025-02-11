import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/homepage/HomePage';
import Cart from './pages/Cart';
import Order from "./pages/order/OrderPage";
import OrderPage from "./pages/order/OrderPage";
import PlaceOrder from './pages/PlaceOrder';
import ShopPage from './components/shop/shopPage';
import PaymentPage from "./pages/PaymentPage";
import ThankYouPage from "./pages/ThankYouPage";



const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/OrderPage" element={<OrderPage />} /> */}
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/shop/:id" element={<ShopPage />} /> {/* Dynamic route for shops */}
        <Route path="/order/:id" element={<Order />} />
        <Route path="/order/:shopId/:itemId" element={<OrderPage />} />
         
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
};

export default App;
