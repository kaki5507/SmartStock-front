import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserSettings from './components/UserSettings';
import Home from './pages/Home';
import InventoryManager from './pages/InventoryManager';
import ProductForm from './pages/ProductForm';
import './App.css';

const App = () => {
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);

  const toggleUserSettings = () => {
    setIsUserSettingsOpen(!isUserSettingsOpen);
  };

  return (
    <Router>
      <Header onToggleUserSettings={toggleUserSettings} />
      <div className="layout">
        <Sidebar />
        <div className={`content ${isUserSettingsOpen ? 'dim' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory-manager" element={<InventoryManager />} />
            <Route path="/product-page" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
      {isUserSettingsOpen && (
        <UserSettings onClose={toggleUserSettings} />
      )}
    </Router>
  );
};

export default App;
