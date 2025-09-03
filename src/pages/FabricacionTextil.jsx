import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Footer from "../components/Footer";

// Imágenes de fabricación textil
import bannerImg from "../assets/fabricacion/imagebanner.png";
import agenciaImg1 from "../assets/fabricacion/agenciadeproducciontextil1.png";
import agenciaImg2 from "../assets/fabricacion/agenciadeproducciontextil2.png";

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
                                className="bg-primary text-black px-8 py-3 font-medium hover:bg-yellow-500 transition-colors duration-300 w-full"
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
                                className="bg-primary text-black px-8 py-3 font-medium hover:bg-yellow-500 transition-colors duration-300 w-full"
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

export default function FabricacionTextil() {
    return (
        <div className="pagina-fabricacion-textil bg-black">
            <Header />
            <MainBanner title={'FABRICACIÓN TEXTIL'} image={bannerImg}/>
            <AgenciaProduccionTextil />
            <Footer />
        </div>
    );
}