import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (

    // Armo la cards
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: '220px', objectFit: 'contain', padding: '10px' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{product.title}</Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
          {product.description.slice(0, 80)}...
        </Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong className="price-text">${product.price}</strong>
          <Button variant="success" onClick={() => agregarAlCarrito(product)}>
            Agregar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
