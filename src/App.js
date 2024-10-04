import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import InventoryManager from './components/InventoryManager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/inventory" element={<InventoryManager />} />
      </Routes>
    </Router>
  );
}

export default App;
