import React from "react";

export default function InfoGeneral({ title, text, images }) {
    return (
        <div className="bg-black flex justify-center py-16 lg:py-24">
            <div className="w-full max-w-7xl px-6 lg:px-8 flex flex-col">

                {/* Título */}
                <h2
                    className="text-primary text-center font-bold my-8 lg:my-12"
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 32px)',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}
                >
                    {title}
                </h2>

                {/* Contenedor principal - Texto e Imágenes */}
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-8 lg:gap-12">

                    {/* Texto */}
                    <div
                        className="text-white text-justify w-full lg:w-auto lg:max-w-xl xl:max-w-2xl order-2 lg:order-1"
                        style={{
                            fontFamily: 'Clash Display',
                            fontSize: 'clamp(18px, 3vw, 24px)',
                            fontWeight: 500,
                            lineHeight: '1.6',
                            textAlign: 'justify'
                        }}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />

                    {/* Grid de imágenes 2x2 */}
                    <div className="w-full lg:w-auto order-1 lg:order-2 flex justify-center">
                        <div className="grid grid-cols-2 gap-0 w-full max-w-md lg:max-w-none lg:w-96 xl:w-[410px]">
                            {images.map((imagen, index) => (
                                <img
                                    key={index}
                                    src={imagen}
                                    alt={`Información General ${index + 1}`}
                                    className="w-full h-48 sm:h-56 lg:h-72 xl:h-[305px] object-cover"
                                    style={{
                                        width: '100%',
                                        aspectRatio: '205/305'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}