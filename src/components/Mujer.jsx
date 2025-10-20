import React from 'react';
import ProductList from './ProductList';

const Mujer = () => {
  return (
    <div className="container">
      <h1 className="main-title">Ropa de mujer</h1>
      <ProductList category="women's clothing" />
    </div>
  );
};

export default Mujer;
