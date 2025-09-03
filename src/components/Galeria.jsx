import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Importar todas las imágenes de la galería
import galeria1 from '../assets/inicio/galeria-inicio-01.png';
import galeria2 from '../assets/inicio/galeria-inicio-02.png';
import galeria3 from '../assets/inicio/galeria-inicio-03.png';
import galeria4 from '../assets/inicio/galeria-inicio-04.png';
import galeria5 from '../assets/inicio/galeria-inicio-05.png';
import galeria6 from '../assets/inicio/galeria-inicio-06.png';
import galeria7 from '../assets/inicio/galeria-inicio-07.png';
import galeria8 from '../assets/inicio/galeria-inicio-08.png';
import galeria9 from '../assets/inicio/galeria-inicio-09.png';
import galeria10 from '../assets/inicio/galeria-inicio-10.png';

export default function Galeria() {
    const images = [
        galeria1,
        galeria2,
        galeria3,
        galeria4,
        galeria5,
        galeria6,
        galeria7,
        galeria8,
        galeria9,
        galeria10
    ];

    return (
        <div className="bg-black py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ 
                        delay: 3000, 
                        disableOnInteraction: false 
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        }
                    }}
                    className="w-full h-auto"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative group">
                                <img 
                                    src={image} 
                                    alt={`Galería ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                    style={{
                                        maxWidth: '650px',
                                        height: '720px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Estilos personalizados para el Swiper */}
            <style jsx>{`
                .swiper-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                @media (max-width: 768px) {
                    .swiper-slide img {
                        height: 480px !important;
                    }
                }
                
                @media (min-width: 768px) and (max-width: 1024px) {
                    .swiper-slide img {
                        height: 600px !important;
                    }
                }
            `}</style>
        </div>
    );
}