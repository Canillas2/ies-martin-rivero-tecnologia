import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactoPage = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se implementaría el envío real del formulario
        // Por ahora solo mostramos un mensaje de confirmación
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Helmet>
                <title>Contacto - Martín Rivero Tecnología</title>
                <meta name="description" content="Contacta con el Departamento de Tecnología del IES Martín Rivero" />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <BreadcrumbNav items={[{ label: 'Contacto' }]} />

                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Contacto</h1>
                    <p className="text-muted-foreground text-lg">
                        ¿Tienes alguna pregunta? Estamos aquí para ayudarte
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Información de Contacto */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Información de Contacto</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Dirección</h3>
                                        <p className="text-muted-foreground">
                                            IES Martín Rivero<br />
                                            Ronda, Málaga<br />
                                            España
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <a
                                            href="mailto:tecnologia@martinrivero.es"
                                            className="text-primary hover:underline"
                                        >
                                            tecnologia@martinrivero.es
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Teléfono</h3>
                                        <p className="text-muted-foreground">952 87 XX XX</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Horario de Atención</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Lunes - Viernes</span>
                                        <span className="text-muted-foreground">8:00 - 15:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Recreo</span>
                                        <span className="text-muted-foreground">11:00 - 11:30</span>
                                    </div>
                                    <p className="text-muted-foreground mt-4">
                                        Para consultas fuera del horario escolar, utiliza el formulario de contacto
                                        y te responderemos lo antes posible.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Formulario de Contacto */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Envíanos un Mensaje</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">¡Mensaje Enviado!</h3>
                                    <p className="text-muted-foreground">
                                        Gracias por contactarnos. Te responderemos pronto.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                                            Nombre
                                        </label>
                                        <Input
                                            id="nombre"
                                            name="nombre"
                                            type="text"
                                            placeholder="Tu nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="tu@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="asunto" className="block text-sm font-medium mb-2">
                                            Asunto
                                        </label>
                                        <Input
                                            id="asunto"
                                            name="asunto"
                                            type="text"
                                            placeholder="Asunto del mensaje"
                                            value={formData.asunto}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            rows="5"
                                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Escribe tu mensaje aquí..."
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full">
                                        <Send className="mr-2 h-4 w-4" />
                                        Enviar Mensaje
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default ContactoPage;
