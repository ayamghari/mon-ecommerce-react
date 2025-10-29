import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products } = useCart();
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1 className="display-3 fw-bold mb-4">
                Bienvenue chez  AyaShop
              </h1>
              <h2 className="lead mb-4 fs-4">
                Découvrez notre collection exclusive de produits de qualité
              </h2>
              <div>
                <Button
                  as={Link}
                  to="/products"
                  variant="light"
                  size="lg"
                  className="me-3"
                >
                  <i className="fas fa-shopping-bag me-2"></i>
                  Voir les produits
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  variant="outline-light"
                  size="lg"
                >
                  <i className="fas fa-envelope me-2"></i>
                  Contactez-nous
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Produits en vedette */}
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-5">Produits en vedette</h2>
          </Col>
        </Row>
        <Row>
          {featuredProducts.map((product) => (
            <Col lg={4} md={6} key={product.id} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <Button as={Link} to="/products" variant="primary" size="lg">
              Voir tous les produits
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <Container>
          <Row>
            <Col md={6}>
              <h5>
                <i className="fas fa-store me-2"></i>AyaShop
              </h5>
              <p>Votre boutique en ligne</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p>&copy; 2024 AyaShop</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
