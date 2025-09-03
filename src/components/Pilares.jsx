import React, { useState } from "react";

export default function Pilares() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    function toRoman(number) {
        return ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][number];
    }

    const title = "FLEWSTUDIO SERÁ TU ALIADO PARA MARCAR LA DIFERENCIA EN TU SECTOR";

    const dropdowns = {
        servicio1: {
            title: "DISEÑO GRÁFICO Y DIRECCIÓN CREATIVA",
            text: "Es el punto de partida para llevar tu marca al éxito. Tu identidad debe ser única y estar correctamente enfocada a tu público objetivo para competir de manera óptima en un mercado altamente competitivo."
        },
        servicio2: {
            title: "FABRICACIÓN TEXTIL Y PROVEEDORES",
            text: "Trabajamos directamente con fabricantes y proveedores ubicados en Alemania, España, Asia y Portugal. Podemos fabricar productos desde cero y de alta calidad. Optimizamos nuestros servicios para guiarte y asesorarte en cada etapa. También gestionamos la búsqueda de nuevos proveedores para tus productos especialmente en España y Portugal."
        },
        servicio3: {
            title: "ASESORAMIENTO PERSONALIZADO",
            text: "En FlewStudio tenemos como objetivo afianzarnos como tus socios estratégicos y darte las herramientas y conocimientos necesarios para innovar, optimizar y crecer gestionando las oportunidades y los riesgos. Te ayudamos a implementar soluciones creativas y eficientes que maximicen tu rentabilidad y te diferencien de la competencia. Nuestros servicios están enfocados a fabricantes de todo tipo de prendas y calidades."
        }
    };

    return (
        <div className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    
                    {/* Columna izquierda - Título y texto */}
                    <div className="w-full lg:w-1/2">
                        <h2 
                            className="text-primary text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-8 leading-tight text-justify"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(32px, 4vw, 40px)',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}
                        >
                            {title}
                        </h2>
                        
                        <div className="space-y-4">
                            <p 
                                className="text-white text-base lg:text-lg leading-relaxed text-justify"
                                style={{ 
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                En <span className="font-bold">FlewStudio</span>, entendemos que una imagen vale más que mil palabras. Por eso, nos especializamos en la creación y desarrollo de identidades visuales corporativas que representan la esencia de cada marca.
                            </p>
                            
                            <p 
                                className="text-white text-base lg:text-lg leading-relaxed text-justify"
                                style={{ 
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Además, contamos con una red de fábricas y <span className="font-bold">proveedores textiles de confianza</span> gestionando así fabricaciones textiles, asegurando un proceso eficiente desde la selección de materiales hasta la confección final. Lo que nos permite garantizar calidad, tiempos de entrega óptimos y costos competitivos.
                            </p>
                            
                            <p 
                                className="text-white text-base lg:text-lg leading-relaxed text-justify"
                                style={{ 
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(16px, 2.5vw, 18px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Además ofrecemos un <span className="font-bold">asesoramiento personalizado</span> enfocado a cada sector para hacer fuertes sus puntos más débiles.
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha - Dropdowns */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-8 lg:space-y-10">
                            {Object.entries(dropdowns).map(([key, item], index) => (
                                <div key={key} className="border-b border-white border-opacity-20 pb-8">
                                    
                                    {/* Título del dropdown */}
                                    <div 
                                        className="flex justify-between items-center cursor-pointer group"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        <div className="flex-1">
                                            <div className="flex flex-col">
                                                <span 
                                                    className="text-primary font-medium mb-2"
                                                    style={{ 
                                                        fontFamily: 'Clash Display',
                                                        fontSize: 'clamp(24px, 4vw, 40px)',
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    {toRoman(index + 1)} - SERVICIO
                                                </span>
                                                <span 
                                                    className="text-white font-medium leading-tight"
                                                    style={{ 
                                                        fontFamily: 'Clash Display',
                                                        fontSize: 'clamp(24px, 4vw, 40px)',
                                                        fontWeight: 500,
                                                        lineHeight: '1.1'
                                                    }}
                                                >
                                                    {item.title}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Icono + */}
                                        <div className="ml-6">
                                            <div 
                                                className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center transition-transform duration-300 ${
                                                    activeIndex === index ? 'rotate-45' : ''
                                                }`}
                                            >
                                                <span 
                                                    className="text-primary font-light"
                                                    style={{ fontSize: 'clamp(24px, 4vw, 32px)' }}
                                                >
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contenido desplegable */}
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            activeIndex === index 
                                                ? 'max-h-96 opacity-100 mt-6' 
                                                : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div 
                                            className="text-white leading-relaxed"
                                            style={{ 
                                                fontFamily: 'Clash Display',
                                                fontSize: 'clamp(16px, 2.5vw, 18px)',
                                                fontWeight: 400,
                                                lineHeight: '1.6'
                                            }}
                                        >
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}