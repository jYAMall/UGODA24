// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/ProfilePage';
import { useAuth } from './AuthContext';
import CustomerPage from './components/CustomerPage'; // Сторінка для користувачів з роллю Customer
import ProviderPage from './components/ProviderPage';

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Якщо користувач не авторизований, перенаправляємо на сторінку входу
    return <Navigate to="/login" replace />;
  }

  return children; // Якщо авторизований, відображаємо запитаний компонент
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/as_customer" element={<CustomerPage />} />
          <Route path="/as_provider" element={<ProviderPage />} />  
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
