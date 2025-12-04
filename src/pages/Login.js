import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    const result = login(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: '#FF69B4' }}>
                  Connexion
                </h2>
                <p className="text-muted">Connectez-vous à votre compte</p>
              </div>

              {error && (
                <Alert variant="danger" className="mb-4">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <i className="fas fa-envelope me-2"></i>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    <i className="fas fa-lock me-2"></i>
                    Mot de passe
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid mb-3">
                  <Button variant="primary" type="submit" size="lg">
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Se connecter
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-muted mb-0">
                    Pas encore de compte ?{' '}
                    <Link to="/register" style={{ color: '#FF69B4', textDecoration: 'none', fontWeight: 600 }}>
                      Créer un compte
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <div className="text-center mt-3">
            <Link to="/" style={{ color: '#1B2845', textDecoration: 'none' }}>
              <i className="fas fa-arrow-left me-2"></i>
              Retour à l'accueil
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;