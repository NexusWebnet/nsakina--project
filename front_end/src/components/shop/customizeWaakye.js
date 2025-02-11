import React, { useState } from "react";

const CustomizeWaakye = ({ item, onAddToCart }) => {
  // State for customization options
  const [salad, setSalad] = useState(false);
  const [pepperStew, setPepperStew] = useState(false);
  const [fish, setFish] = useState(0);
  const [meat, setMeat] = useState(0);
  const [sausage, setSausage] = useState(0);

  const handleSubmit = () => {
    const customizedOrder = {
      item,
      customization: {
        salad,
        pepperStew,
        fish,
        meat,
        sausage,
      }
    };
    onAddToCart(customizedOrder);
  };

  return (
    <div className="customize-waakye">
      <h3>Customize {item.name}</h3>
      
      <label>
        Add Salad:
        <input 
          type="checkbox" 
          checked={salad} 
          onChange={() => setSalad(!salad)} 
        />
      </label>

      <label>
        Add Pepper Stew:
        <input 
          type="checkbox" 
          checked={pepperStew} 
          onChange={() => setPepperStew(!pepperStew)} 
        />
      </label>

      {item.customization.fish.enabled && (
        <div>
          <label>
            Number of Fish:
            <input 
              type="number" 
              min="0" 
              max={item.customization.fish.max} 
              value={fish} 
              onChange={(e) => setFish(Number(e.target.value))}
            />
          </label>
        </div>
      )}

      {item.customization.meat.enabled && (
        <div>
          <label>
            Number of Meat:
            <input 
              type="number" 
              min="0" 
              max={item.customization.meat.max} 
              value={meat} 
              onChange={(e) => setMeat(Number(e.target.value))}
            />
          </label>
        </div>
      )}

      {item.customization.sausage.enabled && (
        <div>
          <label>
            Number of Sausage:
            <input 
              type="number" 
              min="0" 
              max={item.customization.sausage.max} 
              value={sausage} 
              onChange={(e) => setSausage(Number(e.target.value))}
            />
          </label>
        </div>
      )}

      <button onClick={handleSubmit}>Add to Cart</button>
    </div>
  );
};

export default CustomizeWaakye;
