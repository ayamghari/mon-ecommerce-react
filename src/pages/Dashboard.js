import React from 'react';
import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Dashboard() {
  const { user, logout } = useAuth();
  const { cart, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Container className="my-5">
      {/* En-tête Dashboard */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="fw-bold">
                <i className="fas fa-tachometer-alt me-2" style={{ color: '#FF69B4' }}></i>
                Mon Dashboard
              </h2>
              <p className="text-muted mb-0">
                Bienvenue, <strong>{user?.name}</strong> !
              </p>
            </div>
            <Button variant="outline-danger" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt me-2"></i>
              Déconnexion
            </Button>
          </div>
        </Col>
      </Row>

      {/* Statistiques */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <i className="fas fa-shopping-cart fa-3x mb-3" style={{ color: '#FF69B4' }}></i>
              <h3 className="fw-bold">{getTotalItems()}</h3>
              <p className="text-muted mb-0">Articles dans le panier</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <i className="fas fa-euro-sign fa-3x mb-3" style={{ color: '#1B2845' }}></i>
              <h3 className="fw-bold">{getTotalPrice()}€</h3>
              <p className="text-muted mb-0">Total du panier</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <i className="fas fa-box fa-3x mb-3" style={{ color: '#5C6B8A' }}></i>
              <h3 className="fw-bold">0</h3>
              <p className="text-muted mb-0">Commandes</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Informations personnelles */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header style={{ backgroundColor: '#1B2845', color: 'white' }}>
              <i className="fas fa-user me-2"></i>
              Informations Personnelles
            </Card.Header>
            <Card.Body>
              <p className="mb-2">
                <strong>Nom :</strong> {user?.name}
              </p>
              <p className="mb-0">
                <strong>Email :</strong> {user?.email}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header style={{ backgroundColor: '#1B2845', color: 'white' }}>
              <i className="fas fa-cog me-2"></i>
              Actions Rapides
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button as={Link} to="/products" variant="primary">
                  <i className="fas fa-shopping-bag me-2"></i>
                  Continuer mes achats
                </Button>
                <Button as={Link} to="/cart" variant="outline-primary">
                  <i className="fas fa-shopping-cart me-2"></i>
                  Voir mon panier
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Mon Panier */}
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Header style={{ backgroundColor: '#1B2845', color: 'white' }}>
              <i className="fas fa-shopping-cart me-2"></i>
              Mon Panier ({getTotalItems()} article{getTotalItems() > 1 ? 's' : ''})
            </Card.Header>
            <Card.Body>
              {cart.length === 0 ? (
                <div className="text-center py-4">
                  <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                  <p className="text-muted">Votre panier est vide</p>
                  <Button as={Link} to="/products" variant="primary">
                    Commencer mes achats
                  </Button>
                </div>
              ) : (
                <>
                  <Table responsive className="mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(item => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="me-3 rounded"
                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                              />
                              <div>
                                <div className="fw-bold">{item.name}</div>
                                <Badge bg="secondary">{item.category}</Badge>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">{item.price}€</td>
                          <td className="align-middle">{item.quantity}</td>
                          <td className="align-middle fw-bold" style={{ color: '#FF69B4' }}>
                            {(item.price * item.quantity).toFixed(2)}€
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className="text-end mt-3">
                    <h4 className="fw-bold">
                      Total : <span style={{ color: '#FF69B4' }}>{getTotalPrice()}€</span>
                    </h4>
                    <Button as={Link} to="/cart" variant="success" size="lg" className="mt-2">
                      <i className="fas fa-credit-card me-2"></i>
                      Procéder au paiement
                    </Button>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;