// Script para poblar Firestore con datos de ejemplo
// Ejecutar con: node scripts/seedDatabase.js

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../src/config/firebase.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const cursosData = [
    { id: '1eso', nombre: '1º ESO', orden: 1 },
    { id: '2eso', nombre: '2º ESO', orden: 2 },
    { id: '3eso', nombre: '3º ESO', orden: 3 },
    { id: '4eso', nombre: '4º ESO', orden: 4 },
    { id: '1bach', nombre: '1º Bachillerato', orden: 5 },
    { id: '2bach', nombre: '2º Bachillerato', orden: 6 },
];

const asignaturasData = [
    { id: 'tecnologias-1eso', nombre: 'Tecnologías', cursoId: '1eso', curso: '1º ESO' },
    { id: 'robotica-1eso', nombre: 'Robótica', cursoId: '1eso', curso: '1º ESO' },
    { id: 'tecnologias-2eso', nombre: 'Tecnologías', cursoId: '2eso', curso: '2º ESO' },
    { id: 'tecnologias-3eso', nombre: 'Tecnologías', cursoId: '3eso', curso: '3º ESO' },
    { id: 'digitalizacion-3eso', nombre: 'Digitalización', cursoId: '3eso', curso: '3º ESO' },
    { id: 'tecnologia-4eso', nombre: 'Tecnología', cursoId: '4eso', curso: '4º ESO' },
    { id: 'digitalizacion-4eso', nombre: 'Digitalización', cursoId: '4eso', curso: '4º ESO' },
    { id: 'expresion-artistica-4eso', nombre: 'Expresión Artística', cursoId: '4eso', curso: '4º ESO' },
    { id: 'tecnologia-ingenieria-1bach', nombre: 'Tecnología e Ingeniería I', cursoId: '1bach', curso: '1º Bachillerato' },
    { id: 'cultura-cientifica-1bach', nombre: 'Cultura Científica', cursoId: '1bach', curso: '1º Bachillerato' },
    { id: 'tecnologia-ingenieria-2bach', nombre: 'Tecnología e Ingeniería II', cursoId: '2bach', curso: '2º Bachillerato' },
];

const temasData = [
    // Tecnologías 1º ESO
    {
        titulo: 'El proceso tecnológico',
        descripcionCorta: 'Introducción al método de proyectos y resolución de problemas técnicos',
        asignaturaId: 'tecnologias-1eso',
        numeroTema: 1,
        contenido: '<p>El <strong>proceso tecnológico</strong> es un método ordenado que nos permite resolver problemas técnicos de forma eficiente.</p><p>Las fases principales son:</p><ul><li>Identificación del problema</li><li>Búsqueda de información</li><li>Diseño de soluciones</li><li>Planificación y construcción</li><li>Evaluación y mejora</li></ul>',
        videoYoutubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        etiquetas: ['proceso tecnológico', 'método de proyectos', 'diseño'],
        recursos: [
            { nombre: 'Apuntes del tema (PDF)', url: 'https://example.com/apuntes.pdf', tipo: 'pdf' },
            { nombre: 'Ejercicios prácticos', url: 'https://example.com/ejercicios.pdf', tipo: 'pdf' },
        ]
    },
    {
        titulo: 'Materiales de uso técnico',
        descripcionCorta: 'Clasificación y propiedades de los materiales: madera, metales, plásticos',
        asignaturaId: 'tecnologias-1eso',
        numeroTema: 2,
        contenido: '<p>Los <strong>materiales</strong> son las sustancias que utilizamos para fabricar objetos.</p><h3>Clasificación:</h3><ul><li><strong>Madera:</strong> Material natural, renovable</li><li><strong>Metales:</strong> Buenos conductores, resistentes</li><li><strong>Plásticos:</strong> Ligeros, moldeables</li></ul>',
        videoYoutubeUrl: '',
        etiquetas: ['materiales', 'madera', 'metales', 'plásticos'],
        recursos: [
            { nombre: 'Tabla de propiedades', url: 'https://example.com/tabla.pdf', tipo: 'pdf' },
        ]
    },

    // Robótica 1º ESO
    {
        titulo: 'Introducción a la robótica',
        descripcionCorta: 'Conceptos básicos de robótica y automatización',
        asignaturaId: 'robotica-1eso',
        numeroTema: 1,
        contenido: '<p>La <strong>robótica</strong> es la ciencia que estudia el diseño y construcción de robots.</p><p>Un robot es una máquina programable capaz de realizar tareas de forma autónoma.</p>',
        videoYoutubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        etiquetas: ['robótica', 'automatización', 'robots'],
        recursos: [
            { nombre: 'Guía de iniciación', url: 'https://example.com/guia.pdf', tipo: 'pdf' },
        ]
    },
    {
        titulo: 'Programación con bloques',
        descripcionCorta: 'Primeros pasos en programación visual con Scratch',
        asignaturaId: 'robotica-1eso',
        numeroTema: 2,
        contenido: '<p>La <strong>programación por bloques</strong> permite crear programas arrastrando y conectando bloques visuales.</p><p>Scratch es una herramienta ideal para iniciarse en la programación.</p>',
        videoYoutubeUrl: '',
        etiquetas: ['programación', 'scratch', 'bloques'],
        recursos: [
            { nombre: 'Tutorial Scratch', url: 'https://scratch.mit.edu', tipo: 'video' },
        ]
    },

    // Tecnologías 3º ESO
    {
        titulo: 'Electricidad y electrónica',
        descripcionCorta: 'Circuitos eléctricos, magnitudes y componentes electrónicos',
        asignaturaId: 'tecnologias-3eso',
        numeroTema: 1,
        contenido: '<p>La <strong>electricidad</strong> es una forma de energía basada en el movimiento de electrones.</p><h3>Magnitudes eléctricas:</h3><ul><li><strong>Tensión (V):</strong> Diferencia de potencial</li><li><strong>Intensidad (A):</strong> Cantidad de carga que circula</li><li><strong>Resistencia (Ω):</strong> Oposición al paso de corriente</li></ul><p>Ley de Ohm: V = I × R</p>',
        videoYoutubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        etiquetas: ['electricidad', 'electrónica', 'circuitos', 'ley de ohm'],
        recursos: [
            { nombre: 'Simulador de circuitos', url: 'https://www.tinkercad.com', tipo: 'video' },
            { nombre: 'Ejercicios resueltos', url: 'https://example.com/ejercicios.pdf', tipo: 'pdf' },
        ]
    },
    {
        titulo: 'Energías renovables',
        descripcionCorta: 'Fuentes de energía sostenibles y su aprovechamiento',
        asignaturaId: 'tecnologias-3eso',
        numeroTema: 2,
        contenido: '<p>Las <strong>energías renovables</strong> son aquellas que se obtienen de fuentes naturales inagotables.</p><h3>Tipos principales:</h3><ul><li>Solar (fotovoltaica y térmica)</li><li>Eólica</li><li>Hidráulica</li><li>Biomasa</li><li>Geotérmica</li></ul>',
        videoYoutubeUrl: '',
        etiquetas: ['energías renovables', 'sostenibilidad', 'medio ambiente'],
        recursos: [
            { nombre: 'Infografía energías renovables', url: 'https://example.com/infografia.pdf', tipo: 'pdf' },
        ]
    },

    // Digitalización 3º ESO
    {
        titulo: 'Seguridad en Internet',
        descripcionCorta: 'Protección de datos personales y navegación segura',
        asignaturaId: 'digitalizacion-3eso',
        numeroTema: 1,
        contenido: '<p>La <strong>seguridad digital</strong> es fundamental en el mundo conectado actual.</p><h3>Buenas prácticas:</h3><ul><li>Usar contraseñas seguras</li><li>No compartir información personal</li><li>Verificar la autenticidad de sitios web</li><li>Mantener el software actualizado</li></ul>',
        videoYoutubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        etiquetas: ['seguridad', 'internet', 'privacidad'],
        recursos: [
            { nombre: 'Guía de seguridad digital', url: 'https://example.com/seguridad.pdf', tipo: 'pdf' },
        ]
    },
    {
        titulo: 'Ofimática avanzada',
        descripcionCorta: 'Procesadores de texto, hojas de cálculo y presentaciones',
        asignaturaId: 'digitalizacion-3eso',
        numeroTema: 2,
        contenido: '<p>Las herramientas <strong>ofimáticas</strong> son esenciales para la productividad digital.</p><p>Aprenderemos a usar procesadores de texto, hojas de cálculo y software de presentaciones de forma profesional.</p>',
        videoYoutubeUrl: '',
        etiquetas: ['ofimática', 'word', 'excel', 'powerpoint'],
        recursos: [
            { nombre: 'Manual de Excel', url: 'https://example.com/excel.pdf', tipo: 'pdf' },
        ]
    },

    // Tecnología e Ingeniería I - 1º Bach
    {
        titulo: 'Sistemas de control',
        descripcionCorta: 'Introducción a los sistemas de control automático',
        asignaturaId: 'tecnologia-ingenieria-1bach',
        numeroTema: 1,
        contenido: '<p>Un <strong>sistema de control</strong> es un conjunto de dispositivos que regulan el comportamiento de otro sistema.</p><h3>Tipos:</h3><ul><li><strong>Lazo abierto:</strong> Sin realimentación</li><li><strong>Lazo cerrado:</strong> Con realimentación (feedback)</li></ul>',
        videoYoutubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        etiquetas: ['control', 'automatización', 'sistemas'],
        recursos: [
            { nombre: 'Apuntes sistemas de control', url: 'https://example.com/control.pdf', tipo: 'pdf' },
        ]
    },
    {
        titulo: 'Neumática e hidráulica',
        descripcionCorta: 'Sistemas de transmisión de energía mediante fluidos',
        asignaturaId: 'tecnologia-ingenieria-1bach',
        numeroTema: 2,
        contenido: '<p>La <strong>neumática</strong> utiliza aire comprimido y la <strong>hidráulica</strong> utiliza líquidos para transmitir energía.</p><p>Ambos sistemas son fundamentales en la industria moderna.</p>',
        videoYoutubeUrl: '',
        etiquetas: ['neumática', 'hidráulica', 'fluidos'],
        recursos: [
            { nombre: 'Simulador FluidSIM', url: 'https://example.com/fluidsim', tipo: 'video' },
        ]
    },
];

async function seedDatabase() {
    console.log('🌱 Iniciando población de base de datos...\n');

    try {
        // 1. Crear usuario administrador
        console.log('👤 Creando usuario administrador...');
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                'admin@martinriverotecnologia.es',
                'Admin1234'
            );

            // Guardar datos adicionales en Firestore
            await setDoc(doc(db, 'usuarios', userCredential.user.uid), {
                nombre: 'Administrador',
                email: 'admin@martinriverotecnologia.es',
                rol: 'admin',
                fechaCreacion: new Date().toISOString()
            });
            console.log('✅ Usuario administrador creado\n');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('⚠️  Usuario administrador ya existe\n');
            } else {
                throw error;
            }
        }

        // 2. Crear cursos
        console.log('📚 Creando cursos...');
        for (const curso of cursosData) {
            await setDoc(doc(db, 'cursos', curso.id), curso);
            console.log(`  ✓ ${curso.nombre}`);
        }
        console.log('✅ Cursos creados\n');

        // 3. Crear asignaturas
        console.log('📖 Creando asignaturas...');
        for (const asignatura of asignaturasData) {
            await setDoc(doc(db, 'asignaturas', asignatura.id), asignatura);
            console.log(`  ✓ ${asignatura.nombre} (${asignatura.curso})`);
        }
        console.log('✅ Asignaturas creadas\n');

        // 4. Crear temas
        console.log('📝 Creando temas...');
        for (const tema of temasData) {
            await addDoc(collection(db, 'temas'), tema);
            console.log(`  ✓ ${tema.titulo} (${tema.asignaturaId})`);
        }
        console.log('✅ Temas creados\n');

        console.log('🎉 ¡Base de datos poblada exitosamente!');
        console.log('\n📊 Resumen:');
        console.log(`   - Cursos: ${cursosData.length}`);
        console.log(`   - Asignaturas: ${asignaturasData.length}`);
        console.log(`   - Temas: ${temasData.length}`);
        console.log('\n🔐 Credenciales de administrador:');
        console.log('   Email: admin@martinriverotecnologia.es');
        console.log('   Contraseña: Admin1234');

    } catch (error) {
        console.error('❌ Error poblando la base de datos:', error);
    }

    process.exit(0);
}

seedDatabase();
