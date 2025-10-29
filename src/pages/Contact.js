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

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowAlert(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <div className="text-center">
            <h1 className="display-4 mb-4">
              <i className="fas fa-envelope me-3"></i>
              Contactez-nous
            </h1>
            <p className="lead text-muted">
              Une question ? Notre équipe est là pour vous aider !
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <i className="fas fa-paper-plane me-2"></i>
                Envoyez-nous un message
              </h5>
            </Card.Header>
            <Card.Body>
              {showAlert && (
                <Alert variant="success" className="mb-4">
                  <i className="fas fa-check-circle me-2"></i>
                  Message envoyé avec succès !
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nom complet *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Sujet *</Form.Label>
                  <Form.Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="commande">Question sur une commande</option>
                    <option value="produit">Question sur un produit</option>
                    <option value="livraison">Problème de livraison</option>
                    <option value="autre">Autre</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" size="lg" type="submit">
                    <i className="fas fa-paper-plane me-2"></i>
                    Envoyer
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header className="bg-info text-white">
              <h5 className="mb-0">
                <i className="fas fa-info-circle me-2"></i>
                Nos coordonnées
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6>
                  <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                  Adresse
                </h6>
                <p className="text-muted mb-0">
                  123 Rue du Commerce
                  <br />
                  75001 Paris, France
                </p>
              </div>

              <div className="mb-3">
                <h6>
                  <i className="fas fa-phone me-2 text-success"></i>Téléphone
                </h6>
                <p className="text-muted mb-0">+33 1 23 45 67 89</p>
              </div>

              <div className="mb-3">
                <h6>
                  <i className="fas fa-envelope me-2 text-primary"></i>Email
                </h6>
                <p className="text-muted mb-0">contact@shopreact.fr</p>
              </div>

              <div>
                <h6>
                  <i className="fas fa-clock me-2 text-warning"></i>Horaires
                </h6>
                <p className="text-muted mb-0">
                  Lun - Ven: 9h - 18h
                  <br />
                  Sam: 9h - 12h
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="bg-dark text-white">
              <h5 className="mb-0">
                <i className="fas fa-share-alt me-2"></i>
                Suivez-nous
              </h5>
            </Card.Header>
            <Card.Body className="text-center">
              <Button variant="outline-primary" className="me-2 mb-2">
                <i className="fab fa-facebook-f"></i>
              </Button>
              <Button variant="outline-info" className="me-2 mb-2">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button variant="outline-danger" className="me-2 mb-2">
                <i className="fab fa-instagram"></i>
              </Button>
              <Button variant="outline-primary" className="mb-2">
                <i className="fab fa-linkedin"></i>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
