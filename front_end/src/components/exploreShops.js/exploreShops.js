import React, { useEffect } from "react";
import "./explore.css";
import { Link } from "react-router-dom";
import { menuList } from "../../asset/asset";

const Explore = ({ category, setCategory }) => {
  useEffect(() => {
    const exploreContainer = document.getElementById("explore");

    if (!exploreContainer) return; // Avoid runtime error if the element is not found.

    const scrollInterval = setInterval(() => {
      exploreContainer.scrollBy({
        left: 1,
        behavior: "smooth",
      });
    }, 1);

    // Cleanup interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="explore" id="explore">
      <h2>Explore Food Shops</h2>
      <p className="explore-menu-text">
        Discover the variety of food shops available at Nsakina. Our shops offer
        something for everyone. Explore now to find your favorite meals from
        your favorite vendors in town!
      </p>
      <div className="shop-list">
        {menuList.map((shop) => (
          <div
            onClick={() => setCategory((prev) => (prev === shop.name ? "All" : shop.name))}
            key={shop.id}
            className="shop-card"
          >
            <img className={category === shop.name ? "active" : ""} src={shop.image} alt={shop.name} />
            <h3>{shop.name}</h3>
            <p>{shop.description}</p>
            <p className="price">${shop.price}</p>
            <Link to={`/order/${shop.id}`}>
              <button className="order-button">Order Now</button>
            </Link>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Explore;
