import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // Layout을 가져옵니다.
import Home from './pages/Home';
import InventoryManager from './pages/InventoryManager';
import OrderView from './pages/OrderView';
import Report from './pages/Report';
import './App.css';  // App.css를 가져옵니다.

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/inventory-manager" element={<InventoryManager />} />
          <Route path="/order-view" element={<OrderView />} />
          <Route path="/report-stock" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;