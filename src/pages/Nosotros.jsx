import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import InfoGeneral from "../components/InfoGeneral";
import Separador from "../components/Separador";
import Elegirnos from "../components/Elegirnos";
import Herramientas from "../components/Herramientas";
import Garantias from "../components/Garantias";
import FormularioContacto from "../components/FormularioContacto";
import Footer from "../components/Footer";
import Opiniones from "../components/Opiniones";


import bannerImg from "../assets/nosotros/main-banner-nosotros.png"

import infoImg00 from "../assets/nosotros/infogeneral-00.png";
import infoImg01 from "../assets/nosotros/infogeneral-01.png";
import infoImg02 from "../assets/nosotros/infogeneral-02.png";
import infoImg03 from "../assets/nosotros/infogeneral-03.png";

import featureImg00 from "../assets/nosotros/elegirnos-00.png";
import featureImg01 from "../assets/nosotros/elegirnos-01.png";
import featureImg02 from "../assets/nosotros/elegirnos-02.png";

import herramientasImg00 from "../assets/nosotros/herramientas-00.png";
import herramientasImg01 from "../assets/nosotros/herramientas-01.png";
import herramientasImg02 from "../assets/nosotros/herramientas-02.png";
import herramientasImg03 from "../assets/nosotros/herramientas-03.png";
import herramientasImg04 from "../assets/nosotros/herramientas-04.png";

import garantiasImg00 from "../assets/nosotros/garantias-00.png";
import garantiasImg01 from "../assets/nosotros/garantias-01.png";
import garantiasImg02 from "../assets/nosotros/garantias-02.png";
import garantiasImg03 from "../assets/nosotros/garantias-03.png";
import garantiasImg04 from "../assets/nosotros/garantias-04.png";
import garantiasImg05 from "../assets/nosotros/garantias-05.png";
import garantiasImg06 from "../assets/nosotros/garantias-06.png";
import garantiasImg07 from "../assets/nosotros/garantias-07.png";

export default function Nosotros()
{
    const infogeneralText = "Con un recorrido de más de <b>4 años</b> de experiencia, asesorando e impulsando a emprendedores a dar un salto de calidad en su sector.<br><br>Damos vida a tus ideas, analizamos tu necesidad y desarrollamos la <b>solución</b> acorde a tu mercado.<br><br>Marcamos diferencia con el resto de agencias porque somos <b>“el mejor mix”.</b><br><br>Combinamos nuestros servicios de diseño gráfico 360º con la gestión de la producción textil de <b>cualquier tipo de negocio.</b><br><br>Además ofrecemos un asesoramiento <b>personalizado</b> enfocado a cada sector para hacer fuertes sus puntos más débiles.";

    const elegirnosFeatures = {
        "feature00": {
            "img": featureImg00,
            "title": "DISEÑOS QUE REFLEJAN TU ESTILO"
        },
        "feature01": {
            "img": featureImg01,
            "title": "CALIDAD QUE PUEDES VER Y TOCAR"
        },
        "feature02": {
            "img": featureImg02,
            "title": "UN EQUIPO QUE TE ACOMPAÑA"
        },
    };

    const garantias = {
        "garantia00": {
            "img": garantiasImg00,
            "title": "SIN ESTRÉS",
            "text": "Nuestro trabajo está enfocado en apoyarte y hacerte la vida más fácil de manera práctica."
        },
        "garantia01": {
            "img": garantiasImg01,
            "title": "ESPECIALISTAS",
            "text": "Somos un equipo de especialistas con amplia experiencia en todo tipo de diseño."
        },
        "garantia02": {
            "img": garantiasImg02,
            "title": "CERCANÍA",
            "text": "Ofrecemos un servicio basado en la adaptación y necesidades de cada cliente."
        },
        "garantia03": {
            "img": garantiasImg03,
            "title": "SERVICIO 360º",
            "text": "Proporcionamos soluciones a medida, incluyendo un servicio integral."
        },
        "garantia04": {
            "img": garantiasImg04,
            "title": "TOTAL SEGURIDAD",
            "text": "Tanto nuestros servicios como las condiciones laborales cumplen con todas las regulaciones vigentes."
        },
        "garantia05": {
            "img": garantiasImg05,
            "title": "ENTREGA PUNTUAL",
            "text": "Nos distinguimos por realizar entregas rápidas y eficientes."
        },
        "garantia06": {
            "img": garantiasImg06,
            "title": "PAGO SEGURO",
            "text": "Disponemos de un sistema de pago digital para brindarte mayor seguridad."
        },
        "garantia07": {
            "img": garantiasImg07,
            "title": "MAQUINARIA",
            "text": "Contamos con el equipo y la tecnología necesario para garantizar el mejor acabado."
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

    return (
        <div className="pagina-nosotros bg-black">
            <Header />
            <MainBanner 
                title={'NOSOTROS'}
                image={bannerImg}
            />
            <InfoGeneral 
                title={'SOMOS UNA AGENCIA DE DISEÑO GRÁFICO Y PRODUCCIÓN TEXTIL'}
                text={infogeneralText}
                images={[infoImg00, infoImg01, infoImg02, infoImg03]}
            />
            <Separador />
            <Elegirnos 
                title={'<span style="color: var(--color-neutral-white);">¿POR QUÉ ELEGIR FLEWSTUDIO</span> PARA ELEVAR TU NEGOCIO?'}
                metadescription={'Creamos la mejor imagen para tu negocio con un proceso cuidadoso y creativo:'}
                features={elegirnosFeatures}
            />
            <Herramientas
                title={'<span style="color: var(--color-neutral-white);">NUESTRAS HERRAMIENTAS</span> DE TRABAJO'}
                images={[herramientasImg00, herramientasImg01, herramientasImg02, herramientasImg03, herramientasImg04]}
            />
            <Garantias
                title={'<span style="color:white !important;">SERVICIOS CON</span> GARANTÍAS REALES'}
                guarantees={garantias}
            />
            <Opiniones 
                            title='ELLOS SE DEJARON.. <span style="color:#fff600 !important;">Y LES GUSTÓ</span> '
                            reviews={opiniones}
                        />
            <FormularioContacto />
            <Footer />
        </div>
    )
}