import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ChevronRight, ArrowLeft, FileText, Play, Download, ExternalLink, Link2, BookOpen } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import DOMPurify from 'dompurify';

const ResourceIcon = ({ tipo, url = '' }) => {
    const typeLower = tipo?.toLowerCase() || '';
    if (typeLower === "video" || url.includes("youtube") || url.includes("youtu.be")) return <Play className="h-4 w-4 text-accent" />;
    if (typeLower === "pdf" || url.endsWith(".pdf")) return <FileText className="h-4 w-4 text-destructive" />;
    if (typeLower === "document" || typeLower === "download" || url.match(/\.(docx?|xlsx?|pptx?|odt)$/i)) return <Download className="h-4 w-4 text-primary" />;
    return <Link2 className="h-4 w-4 text-primary" />;
};

const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const EmptyState = () => (
    <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center shadow-sm">
        <BookOpen className="mb-3 h-10 w-10 text-muted-foreground/50" />
        <h3 className="text-lg font-semibold text-foreground">Próximamente materiales disponibles</h3>
        <p className="mt-1 text-sm text-muted-foreground">Estamos preparando los contenidos. ¡Vuelve pronto!</p>
    </div>
);

const AsignaturaPage = () => {
    const { id } = useParams();
    const [asignatura, setAsignatura] = useState(null);
    const [temas, setTemas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener asignatura
                const asignaturasRef = collection(db, 'asignaturas');
                const asignaturaQuery = query(asignaturasRef, where('id', '==', id));
                const asignaturaSnapshot = await getDocs(asignaturaQuery);

                if (!asignaturaSnapshot.empty) {
                    const asignaturaData = asignaturaSnapshot.docs[0].data();
                    setAsignatura(asignaturaData);

                    // Obtener temas de esta asignatura
                    const temasRef = collection(db, 'temas');
                    const temasQuery = query(
                        temasRef,
                        where('asignaturaId', '==', id),
                        orderBy('numeroTema', 'asc')
                    );
                    const temasSnapshot = await getDocs(temasQuery);
                    const temasData = temasSnapshot.docs.map(doc => ({
                        docId: doc.id,
                        ...doc.data()
                    }));
                    setTemas(temasData);
                } else {
                    // Fallback para cumplir que el título siempre coincida con el botón pulsado
                    // aunque no exista aún el documento en Firebase
                    setAsignatura({
                        nombre: decodeURIComponent(id),
                        curso: 'Curso por determinar'
                    });
                    setTemas([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-[50vh] flex flex-col">
                <div className="gradient-blue py-10 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="h-5 w-48 rounded bg-white/20 animate-pulse mb-4" />
                        <div className="h-10 w-72 rounded bg-white/20 animate-pulse" />
                    </div>
                </div>
                <div className="mx-auto max-w-4xl w-full px-4 py-8 sm:px-6 lg:px-8 space-y-4">
                    <div className="h-16 w-full rounded-xl bg-muted animate-pulse" />
                    <div className="h-16 w-full rounded-xl bg-muted animate-pulse" />
                    <div className="h-16 w-full rounded-xl bg-muted animate-pulse" />
                </div>
            </div>
        );
    }

    if (!asignatura) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2">Asignatura no encontrada</h1>
                    <Link to="/" className="text-primary hover:underline">Volver a inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{asignatura.nombre} - Martín Rivero Tecnología</title>
                <meta name="description" content={`Contenidos y recursos de ${asignatura.nombre} del IES Martín Rivero`} />
            </Helmet>

            <div className="relative gradient-blue text-white py-10 px-4 sm:px-6 lg:px-8 shadow-sm">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-4 flex items-center gap-1.5 text-sm text-blue-100 flex-wrap">
                        <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="text-white font-medium">{asignatura.nombre}</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-2">{asignatura.nombre}</h1>
                    <p className="text-blue-50 text-lg">
                        {asignatura.curso} — {temas.length} tema{temas.length !== 1 ? "s" : ""}
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                <Link to="/" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                    <ArrowLeft className="h-4 w-4" /> Volver a Inicio
                </Link>

                {temas.length === 0 ? (
                    <EmptyState />
                ) : (
                    <Accordion type="multiple" className="space-y-4">
                        {temas.map((tema) => {
                            const embedUrl = tema.videoYoutubeUrl ? getYoutubeEmbedUrl(tema.videoYoutubeUrl) : "";
                            return (
                                <AccordionItem 
                                    key={tema.docId} 
                                    value={tema.docId} 
                                    className="rounded-xl border border-border bg-card px-5 shadow-sm"
                                >
                                    <AccordionTrigger className="gap-3 py-4 hover:no-underline">
                                        <div className="flex flex-1 items-center justify-between gap-3 text-left">
                                            <div className="flex items-center gap-4">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-base font-bold text-primary">
                                                    {tema.numeroTema}
                                                </span>
                                                <div>
                                                    <span className="font-semibold text-foreground text-lg">{tema.titulo}</span>
                                                    {tema.descripcionCorta && (
                                                        <p className="text-sm text-muted-foreground mt-0.5">{tema.descripcionCorta}</p>
                                                    )}
                                                </div>
                                            </div>
                                            {tema.etiquetas && tema.etiquetas.length > 0 && (
                                                <div className="hidden sm:flex flex-wrap gap-1.5 mr-2">
                                                    {tema.etiquetas.map((etiqueta, idx) => (
                                                        <Badge key={idx} variant="secondary" className="text-xs bg-primary/5 text-primary border-primary/20">
                                                            {etiqueta}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </AccordionTrigger>
                                    
                                    <AccordionContent>
                                        <div className="space-y-6 pb-4 pt-2">
                                            {/* Etiquetas (Móvil) */}
                                            {tema.etiquetas && tema.etiquetas.length > 0 && (
                                                <div className="flex sm:hidden flex-wrap gap-1.5 mb-2">
                                                    {tema.etiquetas.map((etiqueta, idx) => (
                                                        <Badge key={idx} variant="secondary" className="text-[10px] bg-primary/5 text-primary border-primary/20">
                                                            {etiqueta}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Contenido HTML Limpio */}
                                            {tema.contenido && (
                                                <div 
                                                    className="prose prose-sm sm:prose-base dark:prose-invert max-w-none rounded-lg border border-border bg-muted/30 p-5 [&_h2]:text-foreground [&_h3]:text-foreground [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_strong]:text-foreground"
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(tema.contenido, {
                                                            ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'a'],
                                                            ALLOWED_ATTR: ['href', 'target', 'rel']
                                                        })
                                                    }} 
                                                />
                                            )}

                                            {/* Vídeo de YouTube */}
                                            {embedUrl && (
                                                <div>
                                                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                                                        <Play className="h-4 w-4 text-blue-500" /> Vídeo explicativo
                                                    </h4>
                                                    <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-sm" style={{ paddingBottom: "56.25%" }}>
                                                        <iframe 
                                                            src={embedUrl} 
                                                            title={tema.titulo} 
                                                            className="absolute inset-0 h-full w-full" 
                                                            allowFullScreen 
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Listado de Recursos */}
                                            {tema.recursos && tema.recursos.length > 0 && (
                                                <div>
                                                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                                                        <Link2 className="h-4 w-4 text-primary" /> Recursos disponibles
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {tema.recursos.map((recurso, idx) => (
                                                            <li key={idx}>
                                                                <a 
                                                                    href={recurso.url} 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer" 
                                                                    className="flex items-center gap-3 rounded-lg border border-border bg-background hover:bg-muted px-4 py-3 text-sm transition-all shadow-sm hover:shadow hover:border-primary/30"
                                                                >
                                                                    <ResourceIcon tipo={recurso.tipo} url={recurso.url} />
                                                                    <span className="font-medium text-foreground flex-1">{recurso.nombre}</span>
                                                                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-50" />
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            <div className="pt-2">
                                                <button className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
                                                    <BookOpen className="h-4 w-4" /> Estudiar este tema
                                                </button>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                )}
            </div>
        </>
    );
};

export default AsignaturaPage;
