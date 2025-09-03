import React, { useState, useEffect } from 'react';

import slide0 from '../assets/inicio/slider-banner-00.png';
import slide1 from '../assets/inicio/slider-banner-01.png';
import slide2 from '../assets/inicio/slider-banner-02.png';

export default function BannerSlides() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "EXPERTOS EN IMPULSAR TU IMAGEN",
            subtitle: "PON TU MARCA EN MANOS DE ESPECIALISTAS PARA Y CONSIGUE RESULTADOS INMEDIATOS",
            bgImage: slide0
        },
        {
            id: 2,
            title: "CALIDAD Y COMPROMISO EN LOS PLAZOS DE ENTREGA DE TU PROYECTO",
            subtitle: "PON TU MARCA EN MANOS DE ESPECIALISTAS PARA Y CONSIGUE RESULTADOS INMEDIATOS",
            bgImage: slide1
        },
        {
            id: 3,
            title: "ADEMÁS NOS ENCARGAMOS DE LA FABRICACIÓN TEXTIL",
            subtitle: "CONTAMOS CON MAQUINARIA DE PRIMERA PARA LLEVAR A LA REALIDAD TU PROYECTO",
            bgImage: slide2
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[732px] overflow-hidden">
            {/* Slides */}
            <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id}
                        className="min-w-full h-full flex items-center justify-center relative"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {/* Contenido del slide */}
                        <div className="text-center text-white px-6 sm:px-8 lg:px-12 max-w-6xl">
                            <h1 
                                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight"
                                style={{ 
                                    fontFamily: 'Livvic',
                                    fontSize: 'clamp(24px, 4vw, 36px)',
                                    fontWeight: 900
                                }}
                            >
                                {slide.title}
                            </h1>
                            <p 
                                className="text-base sm:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed"
                                style={{ 
                                    fontFamily: 'Livvic',
                                    fontSize: 'clamp(18px, 3vw, 32px)',
                                    fontWeight: 400,
                                    lineHeight: '120%'
                                }}
                            >
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Paginación (puntos) */}
            <div className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index 
                                ? 'bg-primary' 
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}