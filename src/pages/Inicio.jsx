import React from "react";

import Header from "../components/Header";
import Separador from "../components/Separador";
import BannerSlides from "../components/BannerSlides";
import InfoInicio from "../components/InfoInicio";
import Pilares from "../components/Pilares";
import Galeria from "../components/Galeria";
import FormularioCtr from "../components/FormularioCtr";
import Garantias from "../components/Garantias";
import FormularioContacto from "../components/FormularioContacto";
import Footer from "../components/Footer";
import Opiniones from "../components/Opiniones";

import garantiasImg00 from "../assets/inicio/garantia-inicio-00.png";
import garantiasImg01 from "../assets/inicio/garantia-inicio-01.png";
import garantiasImg02 from "../assets/inicio/garantia-inicio-02.png";
import garantiasImg03 from "../assets/inicio/garantia-inicio-03.png";
import garantiasImg04 from "../assets/inicio/garantia-inicio-04.png";
import garantiasImg05 from "../assets/inicio/garantia-inicio-05.png";
import garantiasImg06 from "../assets/inicio/garantia-inicio-06.png";
import garantiasImg07 from "../assets/inicio/garantia-inicio-07.png";

const garantias = {
    "garantia00": {
        "img": garantiasImg00,
        "title": "INNOVACIÓN",
        "text": "Damos un enfoque actual en nuestros diseños para negocios en evolución."
    },
    "garantia01": {
        "img": garantiasImg01,
        "title": "A TU GUSTO",
        "text": " Prendas con tus propias medidas, podemos confeccionar las prendas desde cero."
    },
    "garantia02": {
        "img": garantiasImg02,
        "title": "AVANCE",
        "text": "Acompañamiento en la toma de decisiones para potenciar el crecimiento de tu negocio. "
    },
    "garantia03": {
        "img": garantiasImg03,
        "title": "ATENCIÓN",
        "text": "Asesoramiento completo en selección de materiales y técnicas de impresión."
    },
    "garantia04": {
        "img": garantiasImg04,
        "title": "DETALLES",
        "text": "Trabajamos cada detalle para transmitir profesionalismo y coherencia visual."
    },
    "garantia05": {
        "img": garantiasImg05,
        "title": "CALIDAD",
        "text": "Control exhaustivo para garantizar la mejor confección y desarrollo del producto final."
    },
    "garantia06": {
        "img": garantiasImg06,
        "title": "ESTRATEGIA",
        "text": "Identificamos oportunidades de negocio para anticiparte a las demandas del consumidor."
    },
    "garantia07": {
        "img": garantiasImg07,
        "title": "RECONOCIMIENTO",
        "text": "Hacemos que tu imagen sea reconocible, aumentando la percepción de valor de tu negocio."
    },
};

const opiniones = [
    {
        name: "Antonio Luque",
        timeAgo: "hace 1 año",
        text: "Espectacular el conjunto, todo el gimnasio lo quiere. Volveré a pedir más sin duda."
    },
    {
        name: "Adrits.11",
        timeAgo: "hace 8 meses", 
        text: "El diseño de la hoodie se ha quedado de locos, ha superado mis expectativas."
    },
    {
        name: "Jesús Lara",
        timeAgo: "hace 6 meses",
        text: "Tanto los polos como las camisetas de calidad top y entregado a su tiempo."
    },
    {
        name: "Marina Rodríguez",
        timeAgo: "hace 3 meses",
        text: "El equipo de FlewStudio captó perfectamente la esencia de mi marca. Las camisetas personalizadas quedaron increíbles."
    },
    {
        name: "Carlos Vega",
        timeAgo: "hace 2 meses",
        text: "Proceso súper profesional desde el primer contacto. El acabado de las sudaderas es de primera calidad."
    },
    {
        name: "Laura Sánchez",
        timeAgo: "hace 1 mes",
        text: "Hacía tiempo que buscaba un servicio así de completo. Diseño, producción y entrega todo perfecto."
    }
];

export default function Inicio()
{
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <BannerSlides />
            <InfoInicio />
            <Separador />
            <Pilares />
            <Galeria />
            <FormularioCtr />
            <Separador />
            <Garantias 
                title="¿PORQUÉ CONTRATAR <span style='color: #fff600;'>NUESTROS SERVICIOS</span>?"
                guarantees={garantias}
            />
            <Opiniones 
                title='MÁS RAZONES PARA QUE <span style="color: #fff600;">CONFÍES EN FLEWSTUDIO</span>'
                reviews={opiniones}
            />
            <FormularioContacto />
            <Footer />
        </div>
    )
}