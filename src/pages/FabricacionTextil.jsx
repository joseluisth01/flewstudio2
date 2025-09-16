import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Separador from "../components/Separador";
import FormularioContacto from "../components/FormularioContacto";
import Footer from "../components/Footer";
import Asesoria from "../components/Asesoria";
import Elegirnos from "../components/Elegirnos";

// Imágenes de fabricación textil
import bannerImg from "../assets/fabricacion/imagebanner.png";
import agenciaImg1 from "../assets/fabricacion/agenciadeproducciontextil1.png";
import agenciaImg2 from "../assets/fabricacion/agenciadeproducciontextil2.png";

// Imágenes de servicios profesionales
import servicio1 from "../assets/fabricacion/serviciosprofesionales1.png";
import servicio2 from "../assets/fabricacion/serviciosprofesionales2.png";
import servicio3 from "../assets/fabricacion/serviciosprofesionales3.png";
import servicio4 from "../assets/fabricacion/serviciosprofesionales4.png";
import servicio5 from "../assets/fabricacion/serviciosprofesionales5.png";
import servicio6 from "../assets/fabricacion/serviciosprofesionales6.png";

import asesoriaImg from "../assets/fabricacion/diferentesproblemasdiferentessoluciones.png";

import garantia1 from "../assets/fabricacion/garantia1.gif";
import garantia2 from "../assets/fabricacion/garantia2.gif";
import garantia3 from "../assets/fabricacion/garantia3.gif";

const garantiasProfesionales = {
  garantia00: {
    img: garantia1,
    title: "GESTIÓN DE PROYECTOS Y CONTROL DE PRESUPUESTO",
  },
  garantia01: {
    img: garantia2,
    title: "ESTUDIO DE TENDENCIAS Y MERCADOS",
  },
  garantia02: {
    img: garantia3,
    title: "CONSULTORÍA DE MARCA",
  },
};

// Componente personalizado para la sección de Agencia de Producción Textil
function AgenciaProduccionTextil() {
    return (
        <div className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Título principal */}
                <h2
                    className="text-center font-bold mb-12 lg:mb-16"
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}
                >
                    <span className="text-white">AGENCIA DE </span>
                    <span className="text-primary">PRODUCCIÓN TEXTIL</span>
                </h2>

                {/* Contenedor principal */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Columna izquierda */}
                    <div className="w-full lg:w-1/2 space-y-8">

                        {/* Texto principal */}
                        <p
                            className="text-white text-justify leading-relaxed"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(16px, 2.5vw, 20px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            En <strong>FlewStudio</strong>, convertimos tus ideas en productos textiles de alta calidad. Nos encargamos de la <strong>gestión de producción</strong>, el desarrollo de muestras y el contacto directo con fábricas y proveedores, su cuidado meticuloso según el techpack hasta su entrega final. Garantizando así un <strong>proceso eficiente y controlado en cada etapa.</strong>
                        </p>

                        {/* Pregunta destacada */}
                        <p
                            className="text-white font-semibold"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(20px, 3vw, 27px)',
                                fontWeight: 600,
                                lineHeight: 'normal'
                            }}
                        >
                            ¿QUIERES EMPEZAR AHORA <span className="text-primary">CON LA CREACIÓN DE TUS PRENDAS?</span>
                        </p>

                        {/* Primer botón CTA */}
                        <div className="flex justify-center">
                            <button
                                className="bg-primary text-black px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer w-full"
                                style={{
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                                    fontWeight: 500
                                }}
                                
                            >
                                PRESUPUESTO GRATIS
                            </button>
                        </div>

                        {/* Primera imagen (abajo) */}
                        <div className="w-full">
                            <img
                                src={agenciaImg2}
                                alt="Agencia de Producción Textil"
                                className="w-full h-auto object-cover"
                                style={{ height: '310px' }}
                            />

                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="w-full lg:w-1/2 space-y-8">

                        {/* Segunda imagen (arriba) */}
                        <div className="w-full">
                            <img
                                src={agenciaImg1}
                                alt="Muestras textiles"
                                className="w-full h-auto object-cover"
                                style={{ height: '290px' }}
                            />
                        </div>

                        {/* Segundo botón CTA */}
                        <div className="flex justify-center">
                            <button
                            className="bg-primary text-black px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer w-full"
                                style={{
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                                    fontWeight: 500
                                }}
                            >
                                CUÉNTANOS TU IDEA
                            </button>
                        </div>

                        {/* Subtítulo */}
                        <h3
                            className="text-primary font-semibold"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(20px, 3vw, 27px)',
                                fontWeight: 600,
                                lineHeight: 'normal'
                            }}
                        >
                            DALE UNA OPORTUNIDAD A TU MAYOR IDEA CON FLEWSTUDIO
                        </h3>

                        {/* Texto secundario */}
                        <p
                            className="text-white text-justify leading-relaxed"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(16px, 2.5vw, 20px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            Nos enfocamos en <strong>soluciones creativas y eficaces</strong>, adaptadas a las necesidades de tu marca o negocio. Ya sea que busques <strong>fabricación a medida</strong>, personalización textil o desarrollo de muestras, estamos aquí para hacerlo realidad.
                        </p>

                        <p
                            className="text-white text-justify leading-relaxed"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(16px, 2.5vw, 18px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            Estudiamos cada cliente desde su punto de partida para mejorar sus debilidades y fortalecer sus mejores cualidades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Componente para los servicios profesionales de producción textil
function ServiciosProfesionales() {
    const services = {
        "servicio1": {
            "title": "Gestión de Producción Textil",
            "text": "Nos encargamos de todo el proceso de fabricación desde el primer muestra hasta la entrega final.",
            "img": servicio1
        },
        "servicio2": {
            "title": "Uniformes Laborales",
            "text": "Nos volcamos en cada pedido para que se luzca con nitidez y calidad el vestuario de tu equipo para transmitir confianza para tus clientes.",
            "img": servicio2
        },
        "servicio3": {
            "title": "Desarrollo de Muestras Textiles y Control de Calidad",
            "text": "Nos encargamos de que todo el proceso de fabricación sea óptimo con las indicaciones exactas del techpack de cada cliente.",
            "img": servicio3
        },
        "servicio4": {
            "title": "Sublimación Textil (Full - Print)",
            "text": "Contamos con la producción de prendas sublimadas con la opción de crear tus propias medidas y con el diseño que quieras.",
            "img": servicio4
        },
        "servicio5": {
            "title": "Serigrafía Textil y DTF",
            "text": "Ofrecemos la posibilidad de estampar nuestras prendas con la última tecnología del mercado. Ya sea serigrafía o DTF, podemos personalizar las prendas que ya tengas.",
            "img": servicio5
        },
        "servicio6": {
            "title": "Bordados Personalizados",
            "text": "Nuestros bordados se confeccionan con la mejor maquinaria del mercado dejando así un acabado impecable en tus prendas.",
            "img": servicio6
        }
    };

    function toRoman(number) {
        const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
        return romanNumbers[number] || number;
    }

    return (
        <div className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Título */}
                <h2
                    className="text-center font-bold mb-8 lg:mb-12"
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}
                >
                    <span className="text-white">SERVICIOS PROFESIONALES DE </span>
                    <span className="text-primary">PRODUCCIÓN TEXTIL</span>
                </h2>

                {/* Texto descriptivo */}
                <p
                    className="text-white text-center mb-16 lg:mb-20 max-w-4xl mx-auto"
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 400,
                        lineHeight: '1.6'
                    }}
                >
                    Ofrecemos una multitud de servicios de producción textil para solventar todas tus preocupaciones:
                </p>

                {/* Servicios */}
                <div className="space-y-16 lg:space-y-24">
                    {Object.entries(services).map(([key, value], index) => (
                        <div
                            key={key}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}
                        >
                            {/* Contenedor de texto */}
                            <div className="w-full lg:w-1/2 flex items-center">
                                <div className="flex items-center w-full">
                                    {/* Número romano */}
                                    <div className="flex flex-col items-center mr-8 lg:mr-12">
                                        <div
                                            className="text-primary text-center mb-2"
                                            style={{
                                                fontFamily: 'Clash Display',
                                                fontSize: 'clamp(120px, 15vw, 200px)',
                                                fontWeight: 300,
                                                lineHeight: '0.8',
                                                transform: 'scaleY(1.25)'
                                            }}
                                        >
                                            {toRoman(index)}
                                        </div>
                                        <div className="w-10 h-1 bg-white"></div>
                                    </div>

                                    {/* Contenido del servicio */}
                                    <div className={`flex-1 ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
                                        <h3
                                            className="text-white font-semibold mb-4"
                                            style={{
                                                fontFamily: 'Clash Display',
                                                fontSize: 'clamp(20px, 3vw, 28px)',
                                                fontWeight: 600,
                                                lineHeight: 'normal'
                                            }}
                                        >
                                            {value.title}
                                        </h3>
                                        <p
                                            className="text-white"
                                            style={{
                                                fontFamily: 'Clash Display',
                                                fontSize: 'clamp(16px, 2.5vw, 20px)',
                                                fontWeight: 400,
                                                lineHeight: '1.6'
                                            }}
                                        >
                                            {value.text}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Imagen */}
                            <div className="w-full lg:w-1/2">
                                <img
                                    src={value.img}
                                    alt={`Servicio ${index + 1}`}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA final */}
                <div className="flex justify-center mt-16 lg:mt-24">
                    <button
                        className="bg-primary text-black px-12 py-4 font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                        style={{
                            fontFamily: 'Clash Display',
                            fontSize: 'clamp(16px, 2.5vw, 20px)',
                            fontWeight: 500
                        }}
                    >
                        ¡QUIERO MEJORAR MI MARCA!
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default function FabricacionTextil() {
    return (
        <div className="pagina-fabricacion-textil bg-black">
            <Header />
            <MainBanner title={'FABRICACIÓN TEXTIL'} image={bannerImg} />
            <AgenciaProduccionTextil />
            <Separador />
            <ServiciosProfesionales />
            <Separador />
            <Asesoria
                title={'<span style="color: white">DIFERENTES PROBLEMAS</span> <span style="color: var(--color-primary)">DIFERENTES SOLUCIONES</span>'}
                text={'Ofrecemos distintas consultorías enfocadas en dar soluciones a diferentes problemas y/o necesidades.'}
                img={asesoriaImg}
                title2={'<span style="color: var(--color-primary)">ASESORÍA DE PRODUCCIÓN TEXTIL</span>'}
                text2={'Analizamos tu proyecto desde todos los ángulos y te damos las claves para que consigas materializar tus ideas con la mejor calidad y al mejor precio.'}
                ctaText={'HÁBLANOS DE TU PROYECTO'}
            />
            <Elegirnos
                title={'<span style="color: white;">GARANTÍAS PROFESIONALES DE </span><br><span style="color: #fff600;">ASESORAMIENTO PERSONALIZADO</span>'}
                metadescription={'Nos volcamos con nuestros servicios de asesoría para subsanar todas tus inquietudes:'}
                features={garantiasProfesionales}
            />
            <FormularioContacto 
                descriptiveText="El último que rellenó el panel de abajo no se arrepintió... Te explicaremos y documentaremos todo el proceso de creación."
            />
            <Footer />
        </div>
    );
}