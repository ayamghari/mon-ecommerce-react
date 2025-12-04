import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      // Rediriger vers login si pas connecté
      navigate("/login");
    } else {
      addToCart(product);
    }
  };

  return (
    <Card className="h-100 shadow-sm product-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Badge bg="secondary">{product.category}</Badge>
        </div>

        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {product.description}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <h5 className="text-success mb-0">{product.price}€</h5>
          <Button variant="primary" size="sm" onClick={handleAddToCart}>
            <i className="fas fa-plus me-1"></i>
            Ajouter
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
