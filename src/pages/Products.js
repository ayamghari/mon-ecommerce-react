import React, { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Products() {
  const { products } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "Tous"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <div className="text-center">
            <h1 className="display-4 mb-4">Nos Produits</h1>
            <p className="lead text-muted">Découvrez notre collection de Vetements tendance et abordables.</p>  
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col className="text-center">
          <h5 className="mb-3">Filtrer par catégorie :</h5>
          <ButtonGroup>
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? "primary" : "outline-primary"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <p className="text-muted">
            {filteredProducts.length} produit(s) trouvé(s)
          </p>
        </Col>
      </Row>

      <Row>
        {filteredProducts.map((product) => (
          <Col lg={4} md={6} key={product.id} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
