import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="container">
      <h1 className="main-title">Todos los productos</h1>
      <ProductList />
    </div>
  );
};

export default Home;
