import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="my-5">
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <div className="py-5">
              <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
              <h2 className="mb-3">Votre panier est vide</h2>
              <p className="text-muted mb-4">
                Vous n'avez pas encore ajouté d'articles
              </p>
              <Button as={Link} to="/products" variant="primary" size="lg">
                <i className="fas fa-shopping-bag me-2"></i>
                Voir les produits
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="display-5">
            <i className="fas fa-shopping-cart me-3"></i>
            Mon Panier
          </h1>
          <p className="text-muted">
            {getTotalItems()} article(s) dans votre panier
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header className="bg-light">
              <h5 className="mb-0">Articles</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive className="mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="me-3 rounded"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                          />
                          <div>
                            <h6 className="mb-1">{item.name}</h6>
                            <Badge bg="secondary">{item.category}</Badge>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <strong>{item.price}€</strong>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </Button>
                          <span className="mx-3 fw-bold">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </Button>
                        </div>
                      </td>
                      <td className="align-middle">
                        <strong className="text-success">
                          {(item.price * item.quantity).toFixed(2)}€
                        </strong>
                      </td>
                      <td className="align-middle">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-between mt-3">
            <Button as={Link} to="/products" variant="outline-primary">
              <i className="fas fa-arrow-left me-2"></i>
              Continuer
            </Button>
            <Button variant="outline-danger" onClick={clearCart}>
              <i className="fas fa-trash me-2"></i>
              Vider le panier
            </Button>
          </div>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <i className="fas fa-calculator me-2"></i>
                Résumé
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <span>Sous-total</span>
                <strong>{getTotalPrice()}€</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Livraison</span>
                <span className="text-success">Gratuit</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-3">
                <h5>Total</h5>
                <h5 className="text-success">{getTotalPrice()}€</h5>
              </div>

              <div className="d-grid">
                <Button variant="success" size="lg">
                  <i className="fas fa-credit-card me-2"></i>
                  Payer
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
