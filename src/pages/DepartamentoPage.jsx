import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, Award, BookOpen, Target } from 'lucide-react';

const DepartamentoPage = () => {
    return (
        <>
            <Helmet>
                <title>Departamento - Martín Rivero Tecnología</title>
                <meta name="description" content="Conoce al Departamento de Tecnología del IES Martín Rivero: profesorado, instalaciones y objetivos educativos" />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <BreadcrumbNav items={[{ label: 'Departamento' }]} />

                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Departamento de Tecnología</h1>
                    <p className="text-muted-foreground text-lg">
                        IES Martín Rivero - Ronda, Málaga
                    </p>
                </div>

                {/* Presentación */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-6 w-6 text-primary" />
                                Nuestra Misión
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none">
                            <p>
                                El Departamento de Tecnología del IES Martín Rivero tiene como objetivo formar
                                al alumnado en las competencias tecnológicas necesarias para desenvolverse en
                                la sociedad actual, fomentando el pensamiento crítico, la creatividad y la
                                capacidad de resolver problemas técnicos.
                            </p>
                            <p>
                                Impartimos asignaturas de Tecnología, Digitalización, Robótica y Cultura Científica
                                desde 1º de ESO hasta 2º de Bachillerato, adaptando los contenidos al nivel y
                                necesidades de cada curso.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Características */}
                <section className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Profesorado Cualificado</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Equipo de profesores especializados en tecnología, ingeniería y ciencias,
                                comprometidos con la innovación educativa.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Instalaciones Modernas</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Aulas-taller equipadas con herramientas, ordenadores, kits de robótica
                                y material didáctico actualizado.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Metodología Activa</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Aprendizaje basado en proyectos, trabajo colaborativo y uso de
                                tecnologías educativas innovadoras.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Objetivos */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">Objetivos Educativos</h2>
                    <Card>
                        <CardContent className="pt-6">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-primary text-sm font-bold">1</span>
                                    </div>
                                    <p>
                                        Desarrollar el pensamiento computacional y la capacidad de resolución de problemas técnicos
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-primary text-sm font-bold">2</span>
                                    </div>
                                    <p>
                                        Fomentar la creatividad e innovación mediante proyectos prácticos
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-primary text-sm font-bold">3</span>
                                    </div>
                                    <p>
                                        Promover el uso responsable y seguro de las tecnologías digitales
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-primary text-sm font-bold">4</span>
                                    </div>
                                    <p>
                                        Preparar al alumnado para estudios superiores en ingeniería y tecnología
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-primary text-sm font-bold">5</span>
                                    </div>
                                    <p>
                                        Concienciar sobre la sostenibilidad y el impacto ambiental de la tecnología
                                    </p>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </>
    );
};

export default DepartamentoPage;
