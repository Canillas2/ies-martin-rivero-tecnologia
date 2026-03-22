import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import AsignaturaPage from './pages/AsignaturaPage';
import DepartamentoPage from './pages/DepartamentoPage';
import RecursosPage from './pages/RecursosPage';
import ContactoPage from './pages/ContactoPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import './index.css';

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <AuthProvider>
                    <Router>
                        <div className="flex flex-col min-h-screen">
                            <Navbar />
                            <main className="flex-1">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/asignaturas/:id" element={<AsignaturaPage />} />
                                    <Route path="/departamento" element={<DepartamentoPage />} />
                                    <Route path="/recursos" element={<RecursosPage />} />
                                    <Route path="/contacto" element={<ContactoPage />} />
                                    <Route path="/login" element={<LoginPage />} />
                                    <Route
                                        path="/admin"
                                        element={
                                            <ProtectedRoute>
                                                <AdminDashboard />
                                            </ProtectedRoute>
                                        }
                                    />
                                    {/* Rutas adicionales se pueden agregar aquí */}
                                    <Route path="*" element={
                                        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                                            <h1 className="text-4xl font-bold mb-4">404</h1>
                                            <p className="text-muted-foreground">Página no encontrada</p>
                                        </div>
                                    } />
                                </Routes>
                            </main>
                            <Footer />
                        </div>
                    </Router>
                </AuthProvider>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
