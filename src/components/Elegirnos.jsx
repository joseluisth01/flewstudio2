import React from "react";

export default function Elegirnos({ title, metadescription, features }) {
    return (
        <div className="bg-black flex flex-col justify-center items-center py-16 lg:py-24">
            
            {/* Título */}
            <h2 
                className="text-primary text-center font-bold mb-8 lg:mb-12 px-6"
                style={{ 
                    fontFamily: 'Clash Display',
                    fontSize: 'clamp(28px, 4vw, 36px)',
                    fontWeight: 700,
                    lineHeight: 'normal'
                }}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            
            {/* Metadescripción */}
            <div 
                className="text-white text-center px-6 max-w-4xl"
                style={{ 
                    fontFamily: 'Clash Display',
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    fontWeight: 500,
                    lineHeight: 'normal'
                }}
                dangerouslySetInnerHTML={{ __html: metadescription }}
            />
            
            {/* Características */}
            <div className="w-full max-w-6xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
                    
                    {Object.entries(features).map(([key, value]) => (
                        <div 
                            key={key}
                            className="relative flex flex-wrap justify-center items-center w-full max-w-sm text-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:mt-3"
                            style={{ paddingBottom: '20px' }}
                        >
                            {/* Imagen */}
                            <div className="w-2/5 flex justify-center mb-2">
                                <img 
                                    src={value.img}
                                    alt={`Característica ${key}`}
                                    className="w-full h-auto max-w-16 lg:max-w-20 object-contain"
                                />
                            </div>
                            
                            {/* Título */}
                            <h3 
                                className="w-3/5 text-white pl-4"
                                style={{ 
                                    fontFamily: 'Clash Display',
                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                    fontWeight: 500,
                                    lineHeight: 'normal'
                                }}
                            >
                                {value.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}