import React from "react";

export default function MainBanner({ title, image }) {
    return (
        <div className="relative w-full h-96 sm:h-[475px]">
            
            {/* Imagen de fondo */}
            <img 
                src={image} 
                alt="MAIN BANNER"
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Título centrado */}
            <h1 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 border-b-4 border-white pb-2 px-4"
                style={{ 
                    fontFamily: 'Livvic',
                    fontSize: 'clamp(28px, 5vw, 42px)',
                    fontWeight: 900,
                    lineHeight: '150%',
                    width: '8em',
                    paddingBottom: '0.3em'
                }}
            >
                {title}
            </h1>
        </div>
    );
}