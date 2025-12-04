# 🛍️ AyaShop - Site web E-commerce React
  Site web e-commerce moderne développée avec React et Bootstrap. Permet aux utilisateurs de parcourir des produits, gérer leur panier et créer un compte.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat&logo=bootstrap)

---

## 📸 Aperçu

### Page d'Accueil

![Accueil](./screenshots/home.png)

### Catalogue Produits

![Produits](./screenshots/products.png)

### Connexion

![Login](./screenshots/login.png)

### Panier d'Achats

![Panier](./screenshots/cart.png)

### Dashboard Client

![Dashboard](./screenshots/dashboard.png)

---

## 🛠️ Technologies

- **React 18** - Framework JavaScript
- **React Router** - Navigation
- **Bootstrap 5** - Design responsive
- **Context API** - Gestion d'état
- **localStorage** - Persistance des données

---

## ✨ Fonctionnalités

### Produits

- 18 produits en 6 catégories (T-shirts, Pantalons, Robes, Chaussures, Sacs, Montres)
- Filtrage par catégorie
- Interface responsive

### Authentification

- Inscription et connexion
- Protection des routes
- Dashboard client

### Panier

- Ajout/suppression de produits
- Modification des quantités
- Calcul automatique du total
- Badge dynamique

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/ayashop.git

# Installer les dépendances
npm install

# Démarrer l'application
npm start

## 📁 Structure


src/
├── components/     # Composants réutilisables
├── pages/          # Pages de l'application
├── context/        # Gestion d'état (Cart, Auth)
├── App.js
└── index.js

