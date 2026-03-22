import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showCursosMenu, setShowCursosMenu] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { user, isAdmin, signOut } = useAuth();
    const navigate = useNavigate();

    const cursos = [
        {
            nombre: '1º ESO',
            asignaturas: [
                { nombre: 'Tecnologías', id: 'tecnologias-1eso' },
                { nombre: 'Robótica', id: 'robotica-1eso' }
            ]
        },
        {
            nombre: '2º ESO',
            asignaturas: [
                { nombre: 'Tecnologías', id: 'tecnologias-2eso' }
            ]
        },
        {
            nombre: '3º ESO',
            asignaturas: [
                { nombre: 'Tecnologías', id: 'tecnologias-3eso' },
                { nombre: 'Digitalización', id: 'digitalizacion-3eso' }
            ]
        },
        {
            nombre: '4º ESO',
            asignaturas: [
                { nombre: 'Tecnología', id: 'tecnologia-4eso' },
                { nombre: 'Digitalización', id: 'digitalizacion-4eso' },
                { nombre: 'Expresión Artística', id: 'expresion-artistica-4eso' }
            ]
        },
        {
            nombre: '1º Bachillerato',
            asignaturas: [
                { nombre: 'Tecnología e Ingeniería I', id: 'tecnologia-ingenieria-1bach' },
                { nombre: 'Cultura Científica', id: 'cultura-cientifica-1bach' }
            ]
        },
        {
            nombre: '2º Bachillerato',
            asignaturas: [
                { nombre: 'Tecnología e Ingeniería II', id: 'tecnologia-ingenieria-2bach' }
            ]
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };

    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">MR</span>
                        </div>
                        <span className="font-bold text-lg hidden sm:block">Martín Rivero Tecnología</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-foreground hover:text-primary transition-colors">
                            Inicio
                        </Link>
                        <Link to="/departamento" className="text-foreground hover:text-primary transition-colors">
                            Departamento
                        </Link>

                        {/* Cursos Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowCursosMenu(true)}
                            onMouseLeave={() => setShowCursosMenu(false)}
                        >
                            <button className="flex items-center text-foreground hover:text-primary transition-colors">
                                Cursos <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {showCursosMenu && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-popover border rounded-lg shadow-lg py-2 animate-fade-in">
                                    {cursos.map((curso) => (
                                        <div key={curso.nombre} className="px-4 py-2">
                                            <div className="font-semibold text-sm text-muted-foreground mb-1">
                                                {curso.nombre}
                                            </div>
                                            {curso.asignaturas.map((asignatura) => (
                                                <Link
                                                    key={asignatura.id}
                                                    to={`/asignaturas/${asignatura.id}`}
                                                    className="block px-2 py-1 text-sm hover:bg-accent rounded transition-colors"
                                                >
                                                    {asignatura.nombre}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/recursos" className="text-foreground hover:text-primary transition-colors">
                            Recursos
                        </Link>
                        <Link to="/contacto" className="text-foreground hover:text-primary transition-colors">
                            Contacto
                        </Link>

                        {isAdmin && (
                            <Link to="/admin" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                                Admin
                            </Link>
                        )}
                    </div>

                    {/* Search, Theme Toggle & Auth */}
                    <div className="hidden md:flex items-center space-x-4">
                        <form onSubmit={handleSearch} className="relative">
                            <Input
                                type="text"
                                placeholder="Buscar..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-48 pr-8"
                            />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </form>

                        <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4" />
                            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
                            <Moon className="h-4 w-4" />
                        </div>

                        {user && (
                            <Button variant="outline" size="sm" onClick={handleSignOut}>
                                Salir
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-4 animate-fade-in">
                        <Link to="/" className="block py-2 hover:text-primary transition-colors">
                            Inicio
                        </Link>
                        <Link to="/departamento" className="block py-2 hover:text-primary transition-colors">
                            Departamento
                        </Link>

                        <div className="space-y-2">
                            <div className="font-semibold">Cursos</div>
                            {cursos.map((curso) => (
                                <div key={curso.nombre} className="pl-4">
                                    <div className="text-sm text-muted-foreground mb-1">{curso.nombre}</div>
                                    {curso.asignaturas.map((asignatura) => (
                                        <Link
                                            key={asignatura.id}
                                            to={`/asignaturas/${asignatura.id}`}
                                            className="block py-1 text-sm hover:text-primary transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {asignatura.nombre}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <Link to="/recursos" className="block py-2 hover:text-primary transition-colors">
                            Recursos
                        </Link>
                        <Link to="/contacto" className="block py-2 hover:text-primary transition-colors">
                            Contacto
                        </Link>

                        {isAdmin && (
                            <Link to="/admin" className="block py-2 text-primary font-semibold">
                                Admin
                            </Link>
                        )}

                        <form onSubmit={handleSearch} className="relative">
                            <Input
                                type="text"
                                placeholder="Buscar..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>

                        <div className="flex items-center justify-between">
                            <span className="text-sm">Modo oscuro</span>
                            <div className="flex items-center space-x-2">
                                <Sun className="h-4 w-4" />
                                <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
                                <Moon className="h-4 w-4" />
                            </div>
                        </div>

                        {user && (
                            <Button variant="outline" className="w-full" onClick={handleSignOut}>
                                Salir
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
