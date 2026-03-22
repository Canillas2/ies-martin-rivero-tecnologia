import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Cpu, Wrench, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Home = () => {
    const cursos = [
        { nombre: '1º ESO', descripcion: 'Tecnologías y Robótica', icon: Rocket, link: '/cursos/1eso' },
        { 
            nombre: '2º ESO', 
            icon: Wrench, 
            link: '/cursos/2eso',
            descripcion: (
                <div className="flex flex-col mt-2 space-y-3">
                    <span className="text-muted-foreground">2 asignaturas</span>
                    <div className="flex flex-col gap-2">
                        <Button asChild variant="secondary" className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal border border-border/50 hover:border-primary/50 transition-colors">
                            <Link to="/asignaturas/Tecnología y Digitalización I">
                                Tecnología y Digitalización I
                            </Link>
                        </Button>
                        <Button asChild variant="secondary" className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal border border-border/50 hover:border-primary/50 transition-colors">
                            <Link to="/asignaturas/Computación y Robótica II">
                                Computación y Robótica II
                            </Link>
                        </Button>
                    </div>
                </div>
            ), 
        },
        { nombre: '3º ESO', descripcion: 'Tecnologías y Digitalización', icon: Cpu, link: '/cursos/3eso' },
        { nombre: '4º ESO', descripcion: 'Tecnología, Digitalización y Expresión Artística', icon: BookOpen, link: '/cursos/4eso' },
        { nombre: '1º Bachillerato', descripcion: 'Tecnología e Ingeniería I, Cultura Científica', icon: Cpu, link: '/cursos/1bach' },
        { nombre: '2º Bachillerato', descripcion: 'Tecnología e Ingeniería II', icon: Rocket, link: '/cursos/2bach' },
    ];

    return (
        <>
            <Helmet>
                <title>Inicio - Martín Rivero Tecnología</title>
                <meta name="description" content="Portal educativo del Departamento de Tecnología del IES Martín Rivero en Ronda, Málaga. Recursos, materiales y contenidos para ESO y Bachillerato." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative gradient-blue text-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Departamento de Tecnología
                            </h1>
                            <p className="text-xl mb-8 text-blue-50">
                                IES Martín Rivero - Ronda, Málaga
                            </p>
                            <p className="text-lg mb-8 text-blue-100">
                                Bienvenido al portal educativo donde encontrarás todos los recursos, materiales y contenidos
                                para las asignaturas de Tecnología, Digitalización, Robótica y más.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                    <Link to="/departamento">
                                        Conoce el Departamento
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                    <Link to="/recursos">
                                        Ver Recursos
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform rotate-3"></div>
                                <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/20 rounded-lg p-4 text-center">
                                            <div className="text-3xl font-bold">6</div>
                                            <div className="text-sm">Cursos</div>
                                        </div>
                                        <div className="bg-white/20 rounded-lg p-4 text-center">
                                            <div className="text-3xl font-bold">12+</div>
                                            <div className="text-sm">Asignaturas</div>
                                        </div>
                                        <div className="bg-white/20 rounded-lg p-4 text-center">
                                            <div className="text-3xl font-bold">100+</div>
                                            <div className="text-sm">Recursos</div>
                                        </div>
                                        <div className="bg-white/20 rounded-lg p-4 text-center">
                                            <div className="text-3xl font-bold">∞</div>
                                            <div className="text-sm">Aprendizaje</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cursos Section */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Nuestros Cursos</h2>
                    <p className="text-muted-foreground text-lg">
                        Explora los contenidos organizados por curso y asignatura
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cursos.map((curso, index) => {
                        const Icon = curso.icon;
                        return (
                            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in group">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl">{curso.nombre}</CardTitle>
                                    <div className="text-sm text-muted-foreground">{curso.descripcion}</div>
                                </CardHeader>
                                <CardContent>
                                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Link to={curso.link}>
                                            Ver asignaturas
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-muted py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                <BookOpen className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Contenidos Actualizados</h3>
                            <p className="text-muted-foreground">
                                Materiales didácticos constantemente actualizados y adaptados al currículo oficial
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                <Cpu className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Recursos Multimedia</h3>
                            <p className="text-muted-foreground">
                                Vídeos, presentaciones, actividades interactivas y mucho más
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                <Rocket className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Aprendizaje Práctico</h3>
                            <p className="text-muted-foreground">
                                Proyectos, prácticas de laboratorio y actividades hands-on
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
