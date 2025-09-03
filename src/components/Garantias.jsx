import React from "react";

export default function Garantias({ title, guarantees }) {
    return (
        <div className="bg-black flex flex-col items-center py-16 lg:py-24">
            
            {/* Título */}
            <h2 
                className="text-primary text-center font-bold mb-8 lg:mb-14 px-6"
                style={{ 
                    fontFamily: 'Clash Display',
                    fontSize: 'clamp(28px, 4vw, 36px)',
                    fontWeight: 700,
                    lineHeight: 'normal'
                }}
                dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* Grid de garantías */}
            <div className="w-full max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 justify-items-center">
                    
                    {Object.entries(guarantees).map(([key, value], index) => (
                        <div 
                            key={key} 
                            className="flex flex-col items-center text-center max-w-xs w-full"
                        >
                            {/* Icono */}
                            <div className="mb-6 lg:mb-8">
                                <img
                                    src={value.img}
                                    alt={`Garantía ${index + 1}`}
                                    className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                                />
                            </div>
                            
                            {/* Título */}
                            <h3 
                                className="text-primary text-center font-bold mb-4 lg:mb-6"
                                style={{ 
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(18px, 3vw, 24px)',
                                    fontWeight: 500,
                                    lineHeight: 'normal'
                                }}
                            >
                                {value.title}
                            </h3>
                            
                            {/* Texto descriptivo */}
                            <p 
                                className="text-white text-center leading-relaxed"
                                style={{ 
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(14px, 2.5vw, 18px)',
                                    fontWeight: 500,
                                    lineHeight: '1.5'
                                }}
                            >
                                {value.text}
                            </p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}