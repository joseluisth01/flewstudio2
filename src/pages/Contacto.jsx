import React from "react";

import Header from '../components/Header';
import MainBanner from "../components/MainBanner";
import FormularioContacto from "../components/FormularioContacto";
import FormularioCtr from "../components/FormularioCtr";
import Footer from "../components/Footer";

import bannerImg from "../assets/contacto/main-banner-contacto.png"

export default function Contacto()
{
    return (
        <div className="pagina-contacto bg-black">
            <Header />
            <MainBanner title={'CONTACTO'} image={bannerImg}/>
            
            {/* Título para el primer formulario */}
            <div className="flex justify-center py-8 lg:py-12">
                <h2 
                    className="text-center font-semibold max-w-6xl px-6"
                    style={{ 
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 600,
                        lineHeight: 'normal'
                    }}
                >
                    <span style={{ color: 'white' }}>A UN SOLO PASO DE </span>
                    <span style={{ color: '#fff600' }}>ESCALAR TU NEGOCIO</span>
                </h2>
            </div>
            
            <FormularioContacto 
                descriptiveText="Si has llegado hasta aquí, tu negocio está aún más cerca del éxito. Te explicaremos y documentaremos todo el proceso de creación."
            />
            
            {/* Título para el segundo formulario */}
            <div className="flex justify-center py-8 lg:py-12">
                <h2 
                    className="text-center font-semibold max-w-6xl px-6"
                    style={{ 
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 600,
                        lineHeight: 'normal'
                    }}
                >
                    <span style={{ color: 'white' }}>Y SI ESTÁS </span>
                    <span style={{ color: '#fff600' }}>MUY OCUPADO...</span>
                </h2>
            </div>
            
            <FormularioCtr />
            <Footer />
        </div>
    )
}