import React from "react";
import { useLocation } from "react-router-dom";
import './paymentPage.css';

const PaymentPage = () => {
    const location = useLocation();
    const orderDetails = location.state; // Retrieve passed order details

    if (!orderDetails) {
        return (
            <div>
                <h1>No Order Details Found</h1>
                <p>Please go back and try again.</p>
            </div>
        );
    }

    const handlePayment = (method) => {
        alert(`Payment with ${method} selected.`);
        // Add payment logic here
    };

    return (
        <div className="payment-page">
            <h1>Payment Options</h1>
            <h2>Order Summary</h2>
            <p><strong>Shop:</strong> {orderDetails.shopName}</p>
            <p><strong>Item:</strong> {orderDetails.itemName}</p>
            <p><strong>Description:</strong> {orderDetails.description}</p>
            <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
            <p><strong>Total Price:</strong> ${orderDetails.totalPrice.toFixed(2)}</p>

            <h3>Select Payment Method</h3>
            <button onClick={() => handlePayment("Mobile Money")}>
                Pay with Mobile Money
            </button>
            <button onClick={() => handlePayment("Cash on Delivery")}>
                Cash on Delivery
            </button>
        </div>
    );
};

export default PaymentPage;
