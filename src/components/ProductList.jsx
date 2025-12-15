import React, { useEffect, useState, useContext  } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';



const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // modal para agregar al carrito
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const { agregarAlCarrito } = useContext(CartContext);
  const navigate = useNavigate();



  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);


  const handleAgregarAlCarrito = (product) => {
    agregarAlCarrito(product, 1); 
    setProductoSeleccionado(product);
    setShowModal(true);
  };



  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
          </Col>
        ))}
      </Row>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="modal-carrito"
      >
        <Modal.Header closeButton>
          <Modal.Title>✅ Producto agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>{productoSeleccionado?.title}</strong> fue agregado al carrito 🛒</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-cancel" onClick={() => setShowModal(false)}>
            Seguir comprando
          </Button>
          <Button className="btn-confirm" onClick={() => navigate('/carrito')}
      >
            Ir al carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductList;
