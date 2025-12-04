import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          {/* Section 1 : À propos */}
          <Col md={3} className="footer-section">
            <h5 className="footer-brand">AyaShop</h5>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '15px' }}>
              Votre boutique en ligne de confiance pour la mode et les accessoires tendances.
            </p>
          </Col>

          {/* Section 2 : Liens rapides */}
          <Col md={3} className="footer-section">
            <h5>Liens Rapides</h5>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/products">Produits</Link></li>
              <li><Link to="/cart">Panier</Link></li>
              <li><Link to="/Login ">login</Link></li>
              
            </ul>
          </Col>

          {/* Section 3 : Catégories */}
          <Col md={3} className="footer-section">
            <h5>Catégories</h5>
            <ul>
              <li><Link to="/products">T-shirts</Link></li>
              <li><Link to="/products">Pantalons</Link></li>
              <li><Link to="/products">Robes</Link></li>
              <li><Link to="/products">Chaussures</Link></li>
              <li><Link to="/products">Sacs</Link></li>
              <li><Link to="/products">Montres</Link></li>
            </ul>
          </Col>

          {/* Section 4 : Contact & Réseaux sociaux */}
          <Col md={3} className="footer-section">
            <h5>Contactez-nous</h5>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '10px' }}>
              <i className="fas fa-envelope me-2"></i>
              contact@ayashop.com
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '20px' }}>
              <i className="fas fa-phone me-2"></i>
              +212 6 12 34 56 78
            </p>
            
            <div className="footer-social mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2024 AyaShop. Tous droits réservés. Développé avec ❤️ par Aya El Mghari</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;