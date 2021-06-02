
import contaliteApp from '../images/projects/contalite_app/01.png';
import contaliteAdm from '../images/projects/contalite_admin/01.png';
import laptopManager from '../images/projects/laptop_manager/01.png';
import profacad from '../images/projects/profacad/04.png';


const profacadAlbum = { maxNumber: 6, path: 'profacad'};
const laptopManagerAlbum = { maxNumber: 4, path: 'laptop_manager'};
const contaliteAppAlbum = { maxNumber: 1, path: 'contalite_app'};
const contaliteAdminAlbum = { maxNumber: 1, path: 'contalite_admin'};


const projects =  [
    {
        title: "Contalite",
        description: `Sistema de facturación electrónica y contabilidad, desarrollado con laravel y react, 
                      sirviendose de distintos proveedores para temas de pago y transaciones de timbrados de CFDI (proyecto aún en desarrollo)`,
        url: "https://app.contalite.com/",
        image: contaliteApp,
        album: contaliteAppAlbum,
    },
    {
        title: "Contalite Admin",
        description: `Sistema de gestión de declaraciones, opiniones de cumplimiento y planes del servicio contable, incluye estadísticas de la
        actividad mensual dentro del sistema de Contalite.`,
        url: "https://apanel.contalite.com/",
        image: contaliteAdm,
        album: contaliteAdminAlbum,
    },
    {
        title: "Laptop Manager",
        description: `Sistema de gestión de recursos de laptops para el área de IT, cuenta con registro de activos, usuarios y sus vinculaciones,
        además de una sección de monitoreo para asegurar la vinculación de dichos elementos.`,
        url: "",
        image: laptopManager,
        album: laptopManagerAlbum,
    },
    {
        title: "PROFACAD (Formación docente)",
        description: `Software de inscripción, gestión y reportes de cursos elaborados para el personal de la UDG, cuenta con vista dinámicas dependiendo
        del rol del usuario en la sesión activa y un validador de horario para la inscripción a cursos o bien, la asignación de instructores a los cursos.`,
        url: "",
        image: profacad,
        album: profacadAlbum,
    }
];

export default projects;