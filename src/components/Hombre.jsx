import React from 'react';
import ProductList from './ProductList';

const Hombre = () => {
  return (
    <div className="container">
      <h1 className="main-title">Ropa de hombre</h1>
      <ProductList category="men's clothing" />
    </div>
  );
};

export default Hombre;
