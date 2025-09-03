import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Separador from "../components/Separador";
import Garantias from "../components/Garantias";
import Opiniones from "../components/Opiniones";
import FormularioContacto from "../components/FormularioContacto";
import Footer from "../components/Footer";

// Imagen del banner principal
import bannerImg from "../assets/opiniones/imgbannerprincipal.png";

// Logos de empresas
import logoEsenzia from "../assets/opiniones/logoempresa1esenzia.png";
import logoMrDope from "../assets/opiniones/logoempresa2mrdope.png";
import logoZwanzig from "../assets/opiniones/logoempresa3zwanzig.png";
import logoWidemind from "../assets/opiniones/logoempresa4widemid.png";
import logoAB from "../assets/opiniones/logoempresa5ab.png";
import logoJustkeep from "../assets/opiniones/logoempresa6justkeep.png";
import logoJaviMendez from "../assets/opiniones/logoempresa7javimendez.png";

// Importar iconos de garantías reales desde la carpeta correcta
import maquinariaImg from "../assets/garantias/maquinaria.gif";
import pagoSeguroImg from "../assets/garantias/pagoseguro.gif";
import entregaPuntualImg from "../assets/garantias/entregapuntual.gif";
import totalSeguridadImg from "../assets/garantias/totalinseguridad.gif";
import servicio390Img from "../assets/garantias/servicio390.gif";
import cercaniaImg from "../assets/garantias/cercania.gif";
import especialistasImg from "../assets/garantias/especialistas.gif";
import sinEstresImg from "../assets/garantias/sinestres.gif";

// Componente de empresas que confiaron
function EmpresasConfiaron({ title, companies }) {
    return (
        <div className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Título */}
                <h2
                    className="text-white text-center font-bold mb-12 lg:mb-16"
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}
                >
                    <span className="text-white">ESTAS EMPRESAS </span>
                    <span className="text-primary">SABIERON CONFIAR BIEN</span>
                </h2>

                {/* Grid de empresas */}
                <div className="space-y-6 lg:space-y-8">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="bg-primary p-6 lg:p-8 flex flex-col lg:flex-row items-center"
                        >
                            {/* Logo */}
                            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-4 lg:mb-0">
                                {company.logo ? (
                                    <img
                                        src={company.logo}
                                        alt={`Logo ${company.name}`}
                                        className="w-full max-w-full max-h-20 lg:max-h-24 object-contain"
                                    />
                                ) : (
                                    <div
                                        className="max-h-20 lg:max-h-24 h-16 lg:h-20 bg-black flex items-center justify-center px-8 text-primary font-bold text-xl lg:text-2xl"
                                        style={{ fontFamily: 'Clash Display' }}
                                    >
                                        {company.name}
                                    </div>
                                )}
                            </div>

                            {/* Separador vertical - solo visible en desktop */}
                            <div className="hidden lg:block w-px h-20 bg-black mx-8"></div>

                            {/* Contenido */}
                            <div className="w-full lg:w-2/3 text-center lg:text-left">
                                <h3
                                    className="text-black font-bold mb-2"
                                    style={{
                                        fontFamily: 'Clash Display',
                                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                                        fontWeight: 700,
                                        lineHeight: 'normal',
                                        textAlign: "center",
                                    }}
                                >
                                    {company.service}
                                </h3>
                                <p
                                    className="text-black font-medium mb-3"
                                    style={{
                                        fontFamily: 'Clash Display',
                                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                                        fontWeight: 500,
                                        lineHeight: 'normal',
                                        textAlign: "center",
                                    }}
                                >
                                    {company.description}
                                </p>
                                <p
                                    className="text-black font-bold"
                                    style={{
                                        fontFamily: 'Clash Display',
                                        fontSize: 'clamp(18px, 2vw, 18px)',
                                        fontWeight: 400,
                                        lineHeight: 'normal',
                                        textAlign: "center",
                                    }}
                                >
                                    "{company.testimonial}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function OpinionesPage() {

    const empresasData = [
        {
            name: "Esenzia",
            logo: logoEsenzia,
            service: "DISEÑO DE PRENDAS",
            description: "3 CAMISETAS",
            testimonial: "BRUTALES, MUCHAS GRACIAS POR EL SERVICIO"
        },
        {
            name: "Mr. Dope",
            logo: logoMrDope,
            service: "UNIFORMES LABORALES",
            description: "25 CAMISETAS CON ESTAMPACIÓN DTF",
            testimonial: "SE HAN QUEDADO MUY GUAPAS, MUCHÍSIMAS GRACIAS POR TODO"
        },
        {
            name: "Zwanzig",
            logo: logoZwanzig,
            service: "DISEÑO DE PRENDAS Y MOCKUPS",
            description: "CAMISETA, HOODIE, CREWNECK Y 2 MOCKUPS PARA POLOS",
            testimonial: "TODO PERFECTO, MUY RÁPIDO Y MUY ATENTO. ASÍ DA GUSTO"
        },
        {
            name: "Widemind",
            logo: logoWidemind,
            service: "IDENTIDAD VISUAL",
            description: "LOGOS, COLORES CORPORATIVOS, TIPOGRAFÍA Y MOCKUPS",
            testimonial: "A MÍ COMPAÑERO Y A MÍ NOS HA GUSTADO MUCHO Y QUEREMOS AGRADECER Y FELICITAR POR EL TRABAJO"
        },
        {
            name: "AB",
            logo: logoAB,
            service: "ANDRÉS BARBERO | COACH DEPORTIVO",
            description: "DISEÑO Y FABRICACIÓN DE UNIFORMES (FULL-PRINT)",
            testimonial: "UNA LOCURA COMO HAN QUEDADO Y LA CALIDAD UNA PASADA, MUCHAS GRACIAS DE CORAZÓN"
        },
        {
            name: "Justkeep",
            logo: logoJustkeep,
            service: "DISEÑO DE PRENDAS",
            description: "COLECCIÓN DE INVIERNO'24 | CREWNECK, HOODIE Y GORRA",
            testimonial: "OS LA HABÉIS SACADO, NOS MOLA TELA, ESTÁN POTENTES"
        },
        {
            name: "Javi Méndez",
            logo: logoJaviMendez,
            service: "DISEÑO Y FABRICACIÓN DE PRENDAS",
            description: "3 CAMISETAS",
            testimonial: "DURÍSIMAS ENSERIO, MUY GUAPAS, ¡TRABAJAZO!"
        }
    ];

    const garantias = {
        "garantia00": {
            "img": sinEstresImg,
            "title": "SIN ESTRÉS",
            "text": "Nuestro trabajo está enfocado en apoyarte y hacerte la vida más fácil de manera práctica."
        },
        "garantia01": {
            "img": especialistasImg,
            "title": "ESPECIALISTAS",
            "text": "Somos un equipo de especialistas con amplia experiencia en todo tipo de diseño."
        },
        "garantia02": {
            "img": cercaniaImg,
            "title": "CERCANÍA",
            "text": "Ofrecemos un servicio basado en la adaptación y necesidades de cada cliente."
        },
        "garantia03": {
            "img": servicio390Img,
            "title": "SERVICIO 360º",
            "text": "Proporcionamos soluciones a medida, incluyendo un servicio integral."
        },
        "garantia04": {
            "img": totalSeguridadImg,
            "title": "TOTAL SEGURIDAD",
            "text": "Tanto nuestros servicios como las condiciones laborales cumplen con todas las regulaciones vigentes."
        },
        "garantia05": {
            "img": entregaPuntualImg,
            "title": "ENTREGA PUNTUAL",
            "text": "Nos distinguimos por realizar entregas rápidas y eficientes."
        },
        "garantia06": {
            "img": pagoSeguroImg,
            "title": "PAGO SEGURO",
            "text": "Disponemos de un sistema de pago digital para brindarte mayor seguridad."
        },
        "garantia07": {
            "img": maquinariaImg,
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
        <div className="pagina-opiniones bg-black">
            <Header />
            <MainBanner title={'OPINIONES'} image={bannerImg} />

            <EmpresasConfiaron
                title="ESTAS EMPRESAS SABIERON CONFIAR BIEN"
                companies={empresasData}
            />

            <Opiniones
                title='MÁS RAZONES PARA QUE <span style="color: #fff600;">CONFÍES EN FLEWSTUDIO</span>'
                reviews={opiniones}
            />

            <Garantias
                title="SERVICIOS CON <span style='color: #fff600;'>GARANTÍAS REALES</span>"
                guarantees={garantias}
            />

            {/* Sección final con texto promocional */}
            <div className="bg-black py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2
                        className="font-bold mb-8 lg:mb-12"
                        style={{
                            fontFamily: 'Clash Display',
                            fontSize: 'clamp(32px, 5vw, 48px)',
                            fontWeight: 700,
                            lineHeight: '1.2'
                        }}
                    >
                        <span className="text-primary">+ DE 50 NEGOCIOS HAN CONFIADO</span><br />
                        <span className="text-primary">EN FLEWSTUDIO</span><br />
                        <span className="text-white">PARA LLEVAR AL SIGUIENTE</span><br />
                        <span className="text-white">NIVEL SU PROYECTO...</span><br /><br />
                        <span className="text-white">Y TÚ, </span>
                        <span className="text-primary">¿TE VAS A DEJAR?</span>
                    </h2>
                </div>
            </div>

            <FormularioContacto />
            <Footer />
        </div>
    );
}