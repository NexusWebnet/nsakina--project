import React from "react";
import { useParams, Link } from "react-router-dom";
import { storeList } from "../../asset/asset"; // Assuming your asset data file
import './shopPage.css';

const ShopPage = () => {
    const { id } = useParams(); // Get shop ID from the URL
    const shop = storeList.find((shop) => shop.id === parseInt(id)); // Find the shop by ID

    if (!shop) {
        return <h2>Shop Not Found</h2>;
    }

    return (
        <div className="shop-page-container">
            <div className="shop-header">
                <div className="shop-photo">
                    <img src={shop.image} alt={shop.name} className="shop-banner" />
                </div>

                <div className="shop-details">
                    <div className="shop-name">
                        <h1>{shop.name}</h1>
                    </div>
                    <div>
                        <p>{shop.description}</p>
                    </div>
                    <p><strong>Address:</strong> {shop.address}</p>
                    <p><strong>Contact:</strong> {shop.contact}</p>
                    <p><strong>Opening Hours:</strong> {shop.openingHours}</p>
                </div>
            </div>

            <h2 className="menu-title">Menu</h2>
            <div className="menu-items-container">
                {shop.items.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img src={item.image} alt={item.name} className="menu-item-image" />
                        <div className="menu-item-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p><strong>Price:</strong> {item.price}</p>

                          
                            <div>
                               {/* Add a button to navigate to the order page */}
                            <Link to={`/order/${id}/${index}`} className="order-button">
                                Order Now
                            </Link>
                            </div>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
