import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodMenu = () => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await axios.get('/api/menu');
      setMenu(response.data);
    };
    fetchMenu();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl mb-6">Food Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {menu.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-2">${item.price.toFixed(2)}</p>
            <button 
              onClick={() => addToCart(item)} 
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-3xl mb-6">Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded shadow mb-2">
          <h3 className="text-xl mb-2">{item.name}</h3>
          <p className="text-gray-700">${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;
