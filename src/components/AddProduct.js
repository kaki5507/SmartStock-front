import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/products/create', product) // POST 요청으로 상품 등록
      .then(response => {
        alert('상품이 성공적으로 등록되었습니다.');
      })
      .catch(error => {
        console.error('상품 등록 중 오류가 발생했습니다.', error);
      });
  };

  return (
    <div className="add-product">
      <h1>상품 등록</h1>
      <form onSubmit={handleSubmit}>
        <label>
          상품명:
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </label>
        <label>
          가격:
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </label>
        <label>
          수량:
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
        </label>
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default AddProduct;
