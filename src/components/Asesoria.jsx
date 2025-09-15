import React from "react";

export default function Asesoria({ title, text, img, title2, text2, ctaText })
{
    return (
        <div className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Título principal */}
                <h2
                    className="text-center font-bold mb-8 lg:mb-12"
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        color: 'black',
                    }}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                
                {/* Texto descriptivo */}
                <p
                    className="text-white text-center mb-12 lg:mb-16  "
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 400,
                        lineHeight: '1.6'
                    }}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                
                {/* Imagen ceeentral */}
                <div className="flex justify-center mb-12 lg:mb-16">
                    <img
                        src={img}
                        alt="ASESORÍA FLEWSTUDIO"
                        className="w-full max-w-4xl h-auto object-cover"
                        style={{ maxWidth: '100%' }}
                    />
                </div>
                
                {/* Contenedor inferior con título, texto y botón */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12" style={{ flexDirection: 'column' }}>
                    
                    {/* Lado izquierdo - Título y texto */}
                    <div className="w-full lg:w-2/3 text-center lg:text-left">
                        <h3
                            className="font-bold mb-6 lg:mb-8"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(24px, 4vw, 36px)',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                textAlign: 'center'
                            }}
                            dangerouslySetInnerHTML={{ __html: title2 }}
                        />
                        <p
                            className="text-white leading-relaxed"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(16px, 2.5vw, 20px)',
                                fontWeight: 400,
                                lineHeight: '1.6',
                                textAlign: 'center'
                            }}
                            dangerouslySetInnerHTML={{ __html: text2 }}
                        />
                    </div>
                    
                    {/* Lado derecho - Botón CTA */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                        <form action="/contacto" method="get" className="w-full lg:w-auto">
                            <button 
                                className="bg-primary text-black px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer w-full lg:w-auto"
                                style={{
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                    fontWeight: 500,
                                    minWidth: '280px'
                                }}
                            >
                                {ctaText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}