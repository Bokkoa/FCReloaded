
import contaliteApp from '../images/projects/contalite_app.png';
import twitter from '../images/projects/twitter.png';

const projects =  [
    {
        title: "Contalite",
        description: `Sistema de facturación electrónica y contabilidad, desarrollado con laravel y react, 
                      sirviendose de distintos proveedores para temas de pago y transaciones de timbrados de CFDI (proyecto aún en desarrollo)`,
        url: "https://app.contalite.com/",
        image: contaliteApp,
    },
    {
        title: "Contalite Admin.",
        description: `Sistema de gestión de declaraciones, opiniones de cumplimiento y planes del servicio contable, incluye estadísticas de la
        actividad mensual dentro del sistema de Contalite.`,
        url: "https://apanel.contalite.com/",
        image: twitter,
    }
];

export default projects;