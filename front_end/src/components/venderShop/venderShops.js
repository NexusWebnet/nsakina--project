import React from "react";
import { Link } from "react-router-dom";
import { storeList } from "../../asset/asset";

const VendorShops = () => {
  return (
    <div className="vendor-shops">
      <h1>Vendor Shops</h1>
      <div className="shop-list">
        {storeList.map((shop) => (
          <div key={shop.id} className="shop-card">
            <img src={shop.image} alt={shop.name} className="shop-image" />
            <h2>{shop.name}</h2>
            <p>{shop.description}</p>
            <Link to={`/shop/${shop.id}`} className="view-shop-link">
              View Shop
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorShops;
