import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Separador from "../components/Separador";
import FormularioContacto from "../components/FormularioContacto";
import Footer from "../components/Footer";
import Asesoria from "../components/Asesoria";
import Garantias from "../components/Garantias";

import bannerImg from "../assets/design/main-banner-design.png";

// Imágenes para la sección de agencia
import agenciaImg1 from "../assets/design/agencia-design-00.png";
import agenciaImg2 from "../assets/design/agencia-design-01.png";

// Imágenes de servicios profesionales
import servicio1 from "../assets/design/servicios-design-00.png";
import servicio2 from "../assets/design/servicios-design-01.png";
import servicio3 from "../assets/design/servicios-design-02.png";
import servicio4 from "../assets/design/servicios-design-03.png";
import servicio5 from "../assets/design/servicios-design-04.png";
import servicio6 from "../assets/design/servicios-design-05.png";

// Imagen de asesoría
import asesoriaImg from "../assets/design/asesoria-design-00.png";

// Importar garantías desde la carpeta correcta (reutilizamos las de garantías generales)
import garantia1 from "../assets/garantias/sinestres.gif";
import garantia2 from "../assets/garantias/especialistas.gif";
import garantia3 from "../assets/garantias/cercania.gif";

// Componente personalizado para la sección de Agencia de Diseño Gráfico
function AgenciaDiseno() {
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
                    <span className="text-primary">DISEÑO GRÁFICO</span>
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
                            En <strong>FlewStudio</strong>, entendemos que cada marca tiene una historia única que contar. Nos especializamos en transformar ideas en <strong>experiencias visuales</strong> impactantes, que comunican efectivamente el <strong>valor de tu negocio</strong> a tu audiencia objetivo. Desde el concepto hasta la implementación final, te acompañamos en cada paso para asegurar que tu mensaje se destaque en un mercado competitivo.
                        </p>

                        {/* Pregunta destacada */}
                        <p
                            className="text-white font-semibold"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(20px, 3vw, 24px)',
                                fontWeight: 600,
                                lineHeight: 'normal'
                            }}
                        >
                            ¿QUIERES EMPEZAR AHORA <span className="text-primary">CON LA CREACIÓN DE TU PRESENCIA ONLINE Y/O OFFLINE?</span>
                        </p>

                        {/* Primer botón CTA */}
                        <div className="flex justify-center">
                            <form action="/contacto" method="get" className="w-full">
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
                            </form>
                        </div>

                        {/* Primera imagen (abajo) */}
                        <div className="w-full">
                            <img
                                src={agenciaImg2}
                                alt="Soluciones a medida"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="w-full lg:w-1/2 space-y-8">

                        {/* Segunda imagen (arriba) */}
                        <div className="w-full">
                            <img
                                src={agenciaImg1}
                                alt="Agencia de diseño gráfico"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Segundo botón CTA */}
                        <div className="flex justify-center">
                            <form action="/contacto" method="get" className="w-full">
                                <button
                                    className="bg-primary text-black px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer w-full"
                                    style={{
                                        fontFamily: 'Clash Display',
                                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                                        fontWeight: 500
                                    }}
                                >
                                    HÁBLANOS DE TU PROYECTO
                                </button>
                            </form>
                        </div>

                        {/* Subtítulo */}
                        <h3
                            className="text-primary font-semibold"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(20px, 3vw, 24px)',
                                fontWeight: 600,
                                lineHeight: 'normal'
                            }}
                        >
                            SOLUCIONES CREATIVAS A MEDIDA PARA TU NEGOCIO
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
                            Desde <strong>estudio de diseño gráfico</strong> hasta su implementación, te ofrecemos una gama completa de servicios para llevar tu visión a la realidad.
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
                            Nos dedicamos a entender profundamente tu negocio, tu mercado y tus objetivos para crear <strong>soluciones de diseño gráfico personalizadas</strong> que no sólo luzcan increíbles, sino que también generen resultados reales. Ya sea que necesites <strong>revitalizar tu marca o lanzar un nuevo producto.</strong>
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
                            <strong>Especializados en tipos de diseño gráfico que impulsan el éxito.</strong> Ya sea diseño de <strong>packaging, flyers, o diseño de productos gráficos,</strong> personalizamos cada proyecto según tus necesidades. Nuestros <strong>presupuestos de diseño gráfico</strong> son transparentes y competitivos, asegurando calidad sin comprometer tu inversión.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Componente para los servicios profesionales de diseño gráfico
function ServiciosProfesionales() {
    const services = {
        "servicio1": {
            "title": "Identidad Visual Corporativa",
            "text": "Para construir una base sólida para tu marca.",
            "img": servicio1
        },
        "servicio2": {
            "title": "Branding y Rebranding",
            "text": "De marca para mantener tu imagen fresca y relevante.",
            "img": servicio2
        },
        "servicio3": {
            "title": "Diseño Textil",
            "text": "Desde diseño de camisetas y sudaderas hasta diseño de pantalones, gorras y todo tipo de prendas.",
            "img": servicio3
        },
        "servicio4": {
            "title": "Diseño de logos e Identidad de marca",
            "text": "Crea una primera impresión memorable con un logo distintivo y una identidad de marca cohesiva que refleje los valores y la esencia de tu empresa.",
            "img": servicio4
        },
        "servicio5": {
            "title": "Material Publicitario y de Marketing",
            "text": "Desde folletos y flyers hasta carteles y publicidad exterior, diseñamos materiales que capturan la atención y comunican tu mensaje eficazmente.",
            "img": servicio5
        },
        "servicio6": {
            "title": "Diseño de Packaging y Etiquetas",
            "text": "Mejora la experiencia de compra para así impresionar a tus clientes con presencia offline a través de diseños atractivos y llamativos.",
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
                    <span className="text-primary">DISEÑO GRÁFICO</span>
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
                    Ofrecemos una amplia gama de servicios de diseño gráfico para cubrir todas tus necesidades:
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
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA final */}
                <div className="flex justify-center mt-16 lg:mt-24">
                    <form action="/contacto" method="get" className="w-full max-w-md">
                        <button
                            className="bg-primary text-black px-12 py-4 font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer w-full"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(16px, 2.5vw, 20px)',
                                fontWeight: 500
                            }}
                        >
                            ¡QUIERO MEJORAR MI MARCA!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const garantiasProfesionales = {
    garantia00: {
        img: garantia1,
        title: "GESTIÓN DE PROYECTOS Y CONTROL DE PRESUPUESTO",
        text: "Ayudamos a incrementar la rentabilidad de cada cliente y a mejorar su financiación sobre cualquier proceso de lanzamiento de cada producción o cualquier otro lanzamiento de carácter visual."
    },
    garantia01: {
        img: garantia2,
        title: "ESTUDIO DE TENDENCIAS Y MERCADOS",
        text: "Estamos constantemente observando cada sector de nuestros clientes para posicionarles tanto en su proceso como con su producción con el fin de lanzar productos textil."
    },
    garantia02: {
        img: garantia3,
        title: "CONSULTORÍA DE MARCA",
        text: "Estudiamos cada cliente desde su punto de partida para mejorar sus debilidades y fortalecer sus mejores cualidades."
    }
};

export default function Design() {
    return (
        <div className="pagina-design bg-black">
            <Header />
            <MainBanner title={'DISEÑO'} image={bannerImg} />
            <AgenciaDiseno />
            <Separador />
            <ServiciosProfesionales />
            <Separador />
            <Asesoria
                title={'<span style="color: white">DIFERENTES PROBLEMAS,</span> <span style="color: var(--color-primary)">DIFERENTES SOLUCIONES</span>'}
                text={'Ofrecemos distintas consultorías enfocadas en dar soluciones a diferentes problemas y/o necesidades.'}
                img={asesoriaImg}
                title2={'<span style="color: var(--color-primary)">ASESORÍA DE DISEÑO GRÁFICO</span>'}
                text2={'Analizamos tu negocio desde todos los ángulos y te damos las claves para que consigas convertir en fanáticos a tus clientes.'}
                ctaText={'HÁBLANOS DE TU PROYECTO'}
            />
            <Garantias
                title={'<span style="color: white;">GARANTÍAS PROFESIONALES DE </span><br><span style="color: #fff600;">ASESORAMIENTO PERSONALIZADO</span>'}
                guarantees={garantiasProfesionales}
            />
            <FormularioContacto 
                descriptiveText="¿Vas a desperdiciar la oportunidad de darle vida a tus ideas? Te explicaremos y documentaremos todo el proceso de creación."
            />
            <Footer />
        </div>
    );
}