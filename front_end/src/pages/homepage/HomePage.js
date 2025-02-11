import React, { useState } from 'react'; // Correct import
import "./home.css";
import Header from './header';
import Explore from '../../components/exploreShops.js/exploreShops';
import VendorShops from '../../components/venderShop/venderShops';

const HomePage = () => {
  const [category, setCategory] = useState("All"); // Corrected `useState`

  return (
    <div>
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <VendorShops category={category}/>
    </div>
  );
};

export default HomePage;
