import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    const result = register(name, email, password);

    if (result.success) {
      navigate("/dashboard");
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
                <h2 className="fw-bold" style={{ color: "#FF69B4" }}>
                  Inscription
                </h2>
                <p className="text-muted">Créez votre compte gratuitement</p>
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
                    <i className="fas fa-user me-2"></i>
                    Nom complet
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

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

                <Form.Group className="mb-3">
                  <Form.Label>
                    <i className="fas fa-lock me-2"></i>
                    Mot de passe
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Minimum 6 caractères"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    <i className="fas fa-lock me-2"></i>
                    Confirmer le mot de passe
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid mb-3">
                  <Button variant="primary" type="submit" size="lg">
                    <i className="fas fa-user-plus me-2"></i>
                    Créer mon compte
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-muted mb-0">
                    Déjà un compte ?{" "}
                    <Link
                      to="/login"
                      style={{
                        color: "#FF69B4",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      Se connecter
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <div className="text-center mt-3">
            <Link to="/" style={{ color: "#1B2845", textDecoration: "none" }}>
              <i className="fas fa-arrow-left me-2"></i>
              Retour à l'accueil
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
