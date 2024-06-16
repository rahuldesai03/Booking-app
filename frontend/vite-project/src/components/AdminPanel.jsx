import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ScreenManagement from './ScreenManagement';
import BookingManagement from './BookingManagement';
import MenuManagement from './MenuManagement';

const AdminPanel = () => {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6">
          <ul className="flex space-x-4">
            <li><Link to="/admin/screens" className="text-blue-500">Screen Management</Link></li>
            <li><Link to="/admin/bookings" className="text-blue-500">Booking Management</Link></li>
            <li><Link to="/admin/menu" className="text-blue-500">Menu Management</Link></li>
          </ul>
        </nav>

        <Route path="/admin/screens" component={ScreenManagement} />
        <Route path="/admin/bookings" component={BookingManagement} />
        <Route path="/admin/menu" component={MenuManagement} />
      </div>
    </Router>
  );
};

export default AdminPanel;
