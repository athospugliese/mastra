import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider, AuthContext } from '../src/contexts/authProvider.jsx'; // Importar o AuthProvider e AuthContext

// Componente de rota protegida
const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext); // Obter o token do contexto de autenticação

  // Se não houver token, redirecionar para a página de login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Se o usuário estiver autenticado, renderizar o conteúdo da rota
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* Rota protegida para o dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
