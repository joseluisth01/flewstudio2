import React from "react";

export default function Herramientas({ title, images }) {
    return (
        <div className="bg-black flex justify-center py-10 lg:py-10">
            <div className="w-full max-w-7xl px-6 lg:px-8 flex flex-col items-center">
                
                {/* Título */}
                <h2 
                    className="text-white text-center font-bold mb-12 lg:mb-16"
                    style={{ 
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        letterSpacing: '0.02em'
                    }}
                >
                    <span className="text-white">NUESTRAS HERRAMIENTAS </span>
                    <span className="text-primary">DE TRABAJO</span>
                </h2>
                
                {/* Contenedor de iconos */}
                <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 max-w-4xl">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img 
                                src={image}
                                alt={`Herramienta ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}