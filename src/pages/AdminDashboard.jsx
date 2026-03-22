import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Users, BarChart3, Plus } from 'lucide-react';

const AdminDashboard = () => {
    const { userData } = useAuth();
    const [stats, setStats] = useState({
        cursos: 0,
        asignaturas: 0,
        temas: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const cursosSnapshot = await getDocs(collection(db, 'cursos'));
                const asignaturasSnapshot = await getDocs(collection(db, 'asignaturas'));
                const temasSnapshot = await getDocs(collection(db, 'temas'));

                setStats({
                    cursos: cursosSnapshot.size,
                    asignaturas: asignaturasSnapshot.size,
                    temas: temasSnapshot.size,
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchStats();
    }, []);

    return (
        <>
            <Helmet>
                <title>Panel de Administración - Martín Rivero Tecnología</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Panel de Administración</h1>
                    <p className="text-muted-foreground">
                        Bienvenido, {userData?.nombre || 'Administrador'}
                    </p>
                </div>

                {/* Estadísticas */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Cursos</CardTitle>
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.cursos}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Asignaturas</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.asignaturas}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Temas</CardTitle>
                            <BarChart3 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.temas}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Acciones Rápidas */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Gestión de Contenidos</CardTitle>
                            <CardDescription>
                                Administra cursos, asignaturas y temas
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button className="w-full justify-start" variant="outline">
                                <Plus className="mr-2 h-4 w-4" />
                                Crear Nuevo Curso
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <Plus className="mr-2 h-4 w-4" />
                                Crear Nueva Asignatura
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <Plus className="mr-2 h-4 w-4" />
                                Crear Nuevo Tema
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Información del Sistema</CardTitle>
                            <CardDescription>
                                Estado y configuración
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Base de datos</span>
                                <span className="text-sm font-medium text-green-600">Conectada</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Autenticación</span>
                                <span className="text-sm font-medium text-green-600">Activa</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Hosting</span>
                                <span className="text-sm font-medium text-green-600">Desplegado</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Nota de desarrollo */}
                <Card className="mt-8 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
                    <CardHeader>
                        <CardTitle className="text-blue-900 dark:text-blue-100">
                            🚀 Panel en Desarrollo
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-blue-800 dark:text-blue-200">
                            Este es el panel básico de administración. Las funcionalidades completas de CRUD
                            (crear, editar, eliminar) para cursos, asignaturas y temas se pueden implementar
                            según las necesidades específicas. El sistema está preparado con Firebase Firestore
                            y autenticación funcionando correctamente.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default AdminDashboard;
