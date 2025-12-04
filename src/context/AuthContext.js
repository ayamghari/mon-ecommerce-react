import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Vérifier si l'utilisateur est déjà connecté au chargement
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Fonction de connexion
  const login = (email, password) => {
    // Simulation - Dans la vraie vie, vous appelleriez votre API
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = storedUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      const userWithoutPassword = { 
        name: foundUser.name, 
        email: foundUser.email 
      };
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true };
    } else {
      return { success: false, message: 'Email ou mot de passe incorrect' };
    }
  };

  // Fonction d'inscription
  const register = (name, email, password) => {
    // Simulation - Dans la vraie vie, vous appelleriez votre API
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Vérifier si l'email existe déjà
    const existingUser = storedUsers.find(u => u.email === email);
    if (existingUser) {
      return { success: false, message: 'Cet email est déjà utilisé' };
    }

    // Créer le nouvel utilisateur
    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Connecter automatiquement l'utilisateur
    const userWithoutPassword = { name, email };
    setUser(userWithoutPassword);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));

    return { success: true };
  };

  // Fonction de déconnexion
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};