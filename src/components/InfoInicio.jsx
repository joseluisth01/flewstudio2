import React from "react";

export default function InfoInicio() {
    return (
        <div className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Título principal */}
                <h2 
                    className="text-white text-center font-bold mb-6 lg:mb-8"
                    style={{ 
                        fontFamily: 'Clash Display',
                        fontSize: '36px',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}
                >
                    AGENCIA DE DISEÑO GRÁFICO Y FABRICACIÓN TEXTIL
                </h2>

                {/* Contenedor para subtítulo y texto con el mismo ancho */}
                <div className="mx-auto">
                    
                    {/* Subtítulo */}
                    <h3 
                        className="text-primary text-justify mb-8 lg:mb-12"
                        style={{ 
                            fontFamily: 'Clash Display',
                            fontSize: '32px',
                            fontWeight: 400,
                            lineHeight: '120%'
                        }}
                    >
                        DISEÑO GRÁFICO 360º, FABRICACIÓN TEXTIL Y ASESORAMIENTO PERSONALIZADO
                    </h3>

                    {/* Texto descriptivo */}
                    <p 
                        className="text-white text-justify"
                        style={{ 
                            fontFamily: 'Clash Display',
                            fontSize: 'clamp(16px, 2.5vw, 18px)',
                            fontWeight: 400,
                            lineHeight: '1.6'
                        }}
                    >
                        Somos una agencia <strong className="text-white font-bold">experimentada</strong> equipo de diseñadores gráficos y proveedores textiles para dar vida a tus ideas 
                        con <strong className="text-white font-bold">creatividad y calidad</strong>. Nuestras profesionales capacitados y comprometidos garantizan soluciones visuales y 
                        textiles únicas, <strong className="text-white font-bold">adaptadas a tus necesidades</strong>. Ya sea que necesites una identidad, una producción personalizada o 
                        servicios en línea, nosotros ofrecemos, <strong className="text-white font-bold">servicios integrales</strong> de diseño y cada proyecto para ofrecerte una 
                        experiencia creativa y efectiva.
                    </p>
                </div>
            </div>
        </div>
    );
}