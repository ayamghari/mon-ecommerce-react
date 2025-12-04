import React from "react";
import { Navbar as BSNavbar, Nav, Badge, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { getTotalItems } = useCart();
  const { isAuthenticated, user } = useAuth();

  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          AyaShop
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              <i className="fas fa-home me-1"></i>
              Accueil
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              <i className="fas fa-shopping-bag me-1"></i>
              Produits
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              <i className="fas fa-envelope me-1"></i>
              Contact
            </Nav.Link>

            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  <i className="fas fa-user me-1"></i>
                  {user?.name}
                </Nav.Link>

                <Nav.Link as={Link} to="/cart" className="position-relative">
                  <i className="fas fa-shopping-cart me-1"></i>
                  Panier
                  {getTotalItems() > 0 && (
                    <Badge
                      bg="danger"
                      pill
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        fontSize: "0.7rem",
                      }}
                    >
                      {getTotalItems()}
                    </Badge>
                  )}
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                <i className="fas fa-sign-in-alt me-1"></i>
                Connexion
              </Nav.Link>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
