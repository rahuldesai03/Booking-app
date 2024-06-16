import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScreenManagement = () => {
  const [screens, setScreens] = useState([]);
  const [screenData, setScreenData] = useState({ name: '', totalSeats: '' });

  useEffect(() => {
    const fetchScreens = async () => {
      const response = await axios.get('/api/screens');
      setScreens(response.data);
    };
    fetchScreens();
  }, []);

  const handleChange = (e) => {
    setScreenData({ ...screenData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/screens', screenData);
      setScreens([...screens, response.data]);
    } catch (error) {
      console.error('Error creating screen:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Screen Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Screen Name" 
          onChange={handleChange} 
          className="w-full mb-3 p-2 border rounded" 
          required 
        />
        <input 
          type="number" 
          name="totalSeats" 
          placeholder="Total Seats" 
          onChange={handleChange} 
          className="w-full mb-3 p-2 border rounded" 
          required 
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Screen</button>
      </form>
      <div>
        <h3 className="text-xl mb-2">Existing Screens</h3>
        <ul>
          {screens.map((screen) => (
            <li key={screen._id} className="mb-2">
              {screen.name} - {screen.totalSeats} seats
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScreenManagement;
