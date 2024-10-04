import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InventoryManager.css';

const InventoryManager = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products/all')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('재고 정보를 가져오는 중 오류가 발생했습니다.', error);
      });
  }, []);

  return (
    <div className="inventory-manager">
      <h1>재고 관리</h1>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>현재 수량</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManager;
