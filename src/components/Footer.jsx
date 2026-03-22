import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-muted mt-auto border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Información del Departamento */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Departamento de Tecnología</h3>
                        <p className="text-muted-foreground mb-2">IES Martín Rivero</p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>Ronda, Málaga</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:tecnologia@martinrivero.es" className="hover:text-primary transition-colors">
                                    tecnologia@martinrivero.es
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>952 87 XX XX</span>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/departamento" className="text-muted-foreground hover:text-primary transition-colors">
                                    Departamento
                                </Link>
                            </li>
                            <li>
                                <Link to="/recursos" className="text-muted-foreground hover:text-primary transition-colors">
                                    Recursos
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Síguenos</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Departamento de Tecnología – IES Martín Rivero – Ronda (Málaga)</p>
                    <p className="mt-2">Desarrollado con ❤️ para la educación</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
