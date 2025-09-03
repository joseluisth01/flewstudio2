import React, { useState } from "react";

export default function Opiniones({ title, reviews }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para ir al siguiente grupo de testimonios
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
        );
    };

    // Función para ir al grupo anterior de testimonios
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, reviews.length - 3) : prevIndex - 3
        );
    };

    // Obtener los 3 testimonios actuales para mostrar
    const currentReviews = reviews.slice(currentIndex, currentIndex + 3);

    return (
        <div className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Título */}
                <h2
                    className="text-white text-center font-bold mb-12 lg:mb-16"
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 40px)',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                {/* Container del slider */}
                <div className="relative">

                    {/* Botón anterior */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-primary hover:text-yellow-400 transition-colors duration-300"
                        style={{ fontSize: '40px' }}
                    >
                        &#8249;
                    </button>

                    {/* Grid de testimonios */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
                        {currentReviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-primary p-6 relative"
                                style={{ minHeight: '200px' }}
                            >
                                {/* Cuadrado con inicial */}
                                <div
                                    className="absolute top-4 left-4 w-10 h-10 bg-black text-primary flex items-center justify-center font-bold text-lg"
                                    style={{ fontFamily: 'Clash Display' }}
                                >
                                    {review.name.charAt(0).toUpperCase()}
                                </div>

                                {/* Nombre */}
                                <div
                                    className="absolute top-4 left-16 text-black font-medium"
                                    style={{
                                        fontFamily: 'Clash Display',
                                        fontSize: '18px',
                                        fontWeight: 500
                                    }}
                                >
                                    {review.name}
                                </div>

                                {/* Tiempo y plataforma */}
                                <div
                                    className="absolute top-10 left-16 text-sm"
                                    style={{
                                        fontFamily: 'Clash Display',
                                        fontSize: '18px',
                                        fontWeight: 400,
                                        color: '#D9D9D9'
                                    }}
                                >
                                    {review.timeAgo} en Google
                                </div>

                                {/* Estrellas */}
                                <div
                                    className="absolute top-16 left-16 flex"
                                    style={{
                                        color: '#D9D9D9',
                                        fontSize: '18px'
                                    }}
                                >
                                    {'★★★★★'}
                                </div>

                                {/* Testimonio */}
                                <div
                                    className="text-black"
                                    style={{
                                        fontFamily: 'Clash Display',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        lineHeight: '1.4',
                                        marginTop: '78px'
                                    }}
                                >
                                    "{review.text}"
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botón siguiente */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-primary hover:text-yellow-400 transition-colors duration-300"
                        style={{ fontSize: '40px' }}
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
}