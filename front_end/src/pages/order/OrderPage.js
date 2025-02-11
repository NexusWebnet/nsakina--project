import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { storeList } from "../../asset/asset";
import './orderPage.css';

const OrderPage = () => {
    const { shopId, itemId } = useParams(); // Get shop and item IDs from the URL
    const shop = storeList.find((store) => store.id === parseInt(shopId)); // Find the shop
    const item = shop?.items[parseInt(itemId)]; // Find the item
    const navigate = useNavigate(); // React Router navigate function

    const [quantity, setQuantity] = useState(1); // State to manage item quantity

    if (!shop || !item) {
        return <h2>Item Not Found</h2>;
    }

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure at least 1 item
        setQuantity(value);
    };

    const totalPrice = item.price * quantity; // Calculate total price

    const handleProceedToPayment = () => {
        const orderDetails = {
            shopName: shop.name,
            itemName: item.name,
            quantity,
            pricePerUnit: item.price,
            totalPrice,
            description: item.description,
        };

        // Navigate to Payment Page and pass orderDetails as state
        navigate("/payment", { state: orderDetails });
    };

    return (
        <div className="order-page-container">
            <div className="order-header">
                <h1>Order Details</h1>
                <p><strong>Shop:</strong> {shop.name}</p>
            </div>

            <div className="order-item-details">
                <img src={item.image} alt={item.name} className="order-item-image" />
                <div className="order-item-info">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p><strong>Price per unit:</strong> ${item.price.toFixed(2)}</p>

                    <div className="order-quantity">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                        />
                    </div>

                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

                    <button
                        onClick={handleProceedToPayment}
                        className="proceed-to-payment-button"
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
