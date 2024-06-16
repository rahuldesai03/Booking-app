import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuManagement = () => {
  const [menu, setMenu] = useState([]);
  const [menuItemData, setMenuItemData] = useState({ name: '', price: '' });

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await axios.get('/api/menu');
      setMenu(response.data);
    };
    fetchMenu();
  }, []);

  const handleChange = (e) => {
    setMenuItemData({ ...menuItemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/menu', menuItemData);
      setMenu([...menu, response.data]);
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Menu Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Item Name" 
          onChange={handleChange} 
          className="w-full mb-3 p-2 border rounded" 
          required 
        />
        <input 
          type="number" 
          name="price" 
          placeholder="Price" 
          onChange={handleChange} 
          className="w-full mb-3 p-2 border rounded" 
          required 
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Item</button>
      </form>
      <div>
        <h3 className="text-xl mb-2">Existing Menu Items</h3>
        <ul>
          {menu.map((item) => (
            <li key={item._id} className="mb-2">
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuManagement;
