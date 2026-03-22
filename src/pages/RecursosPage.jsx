import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, Play, FileText } from 'lucide-react';

const RecursosPage = () => {
    const recursos = [
        {
            categoria: 'Software Educativo',
            items: [
                {
                    nombre: 'Tinkercad',
                    descripcion: 'Diseño 3D y simulación de circuitos electrónicos',
                    url: 'https://www.tinkercad.com',
                    tipo: 'web'
                },
                {
                    nombre: 'Scratch',
                    descripcion: 'Programación visual por bloques',
                    url: 'https://scratch.mit.edu',
                    tipo: 'web'
                },
                {
                    nombre: 'Arduino IDE',
                    descripcion: 'Entorno de desarrollo para Arduino',
                    url: 'https://www.arduino.cc/en/software',
                    tipo: 'download'
                },
            ]
        },
        {
            categoria: 'Tutoriales y Guías',
            items: [
                {
                    nombre: 'Guía de Electricidad Básica',
                    descripcion: 'Conceptos fundamentales de electricidad y circuitos',
                    url: '#',
                    tipo: 'pdf'
                },
                {
                    nombre: 'Manual de Robótica',
                    descripcion: 'Introducción a la robótica educativa',
                    url: '#',
                    tipo: 'pdf'
                },
                {
                    nombre: 'Seguridad en Internet',
                    descripcion: 'Buenas prácticas de seguridad digital',
                    url: '#',
                    tipo: 'pdf'
                },
            ]
        },
        {
            categoria: 'Vídeos Educativos',
            items: [
                {
                    nombre: 'Canal de YouTube del Departamento',
                    descripcion: 'Tutoriales y explicaciones de temas',
                    url: 'https://youtube.com',
                    tipo: 'video'
                },
                {
                    nombre: 'Playlist de Electricidad',
                    descripcion: 'Serie de vídeos sobre circuitos eléctricos',
                    url: 'https://youtube.com',
                    tipo: 'video'
                },
            ]
        },
        {
            categoria: 'Enlaces de Interés',
            items: [
                {
                    nombre: 'Consejería de Educación de Andalucía',
                    descripcion: 'Portal educativo oficial',
                    url: 'https://www.juntadeandalucia.es/educacion',
                    tipo: 'web'
                },
                {
                    nombre: 'Code.org',
                    descripcion: 'Aprende programación de forma gratuita',
                    url: 'https://code.org',
                    tipo: 'web'
                },
            ]
        },
    ];

    const getIcon = (tipo) => {
        switch (tipo) {
            case 'video':
                return <Play className="h-5 w-5" />;
            case 'pdf':
                return <FileText className="h-5 w-5" />;
            case 'download':
                return <Download className="h-5 w-5" />;
            default:
                return <ExternalLink className="h-5 w-5" />;
        }
    };

    return (
        <>
            <Helmet>
                <title>Recursos - Martín Rivero Tecnología</title>
                <meta name="description" content="Recursos educativos, software, tutoriales y enlaces de interés para las asignaturas de Tecnología" />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <BreadcrumbNav items={[{ label: 'Recursos' }]} />

                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Recursos Educativos</h1>
                    <p className="text-muted-foreground text-lg">
                        Software, tutoriales, vídeos y enlaces útiles para el aprendizaje
                    </p>
                </div>

                <div className="space-y-8">
                    {recursos.map((categoria, idx) => (
                        <section key={idx}>
                            <h2 className="text-2xl font-bold mb-4">{categoria.categoria}</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {categoria.items.map((recurso, itemIdx) => (
                                    <Card key={itemIdx} className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg mb-1">{recurso.nombre}</CardTitle>
                                                    <CardDescription>{recurso.descripcion}</CardDescription>
                                                </div>
                                                <div className="p-2 bg-primary/10 rounded-lg">
                                                    {getIcon(recurso.tipo)}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <Button asChild variant="outline" className="w-full">
                                                <a href={recurso.url} target="_blank" rel="noopener noreferrer">
                                                    {recurso.tipo === 'download' ? 'Descargar' : 'Acceder'}
                                                    <ExternalLink className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Nota */}
                <Card className="mt-12 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
                    <CardContent className="pt-6">
                        <p className="text-blue-800 dark:text-blue-200">
                            💡 <strong>Nota:</strong> Los recursos están en constante actualización.
                            Si tienes sugerencias de recursos útiles, contacta con el departamento.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default RecursosPage;
