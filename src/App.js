import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'; // Home 컴포넌트 추가
import InventoryManager from './pages/InventoryManager';
import ProductForm from './pages/ProductForm'; // ProductPage 컴포넌트 추가

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <Router>
      <Header toggleSidebar={() => toggleSidebar(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home 컴포넌트 사용 */}
        <Route path="/inventory-manager" element={<InventoryManager />} />
        <Route path="/product-page" element={<ProductForm />} />
      </Routes>
    </Router>
  );
};

export default App;
