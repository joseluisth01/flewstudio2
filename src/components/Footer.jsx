import React from "react";
import { Link } from "react-router-dom";

import imagotipo3 from "../assets/IMAGOTIPONEGRO_3.png";
import logoWhatsapp from "../assets/whatsapp-1.png";
import logoGoogle from "../assets/google-1.png";
import logoInstagram from "../assets/instagram-1.png"

export default function Footer()
{
    return (
        <div className="w-full bg-primary mt-32 lg:mt-40">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-25 px-6 py-12 lg:py-20 max-w-7xl mx-auto">
                
                {/* Left Half */}
                <div className="flex flex-col gap-5 w-full lg:w-auto text-center lg:text-left">
                    <img 
                        src={imagotipo3}
                        alt="IMAGOTIPO FLEWSTUDIO"
                        className="w-80 lg:w-96 h-auto mx-auto lg:mx-0"
                    />
                    <div 
                        className="font-medium text-base lg:text-lg"
                        style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
                    >
                        AGENCIA DE DISEÑO GRÁFICO Y PRODUCCIÓN TEXTIL
                    </div>
                </div>

                {/* Right Half */}
                <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-auto">
                    
                    {/* Row 1 */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-48 w-full lg:w-auto">
                        <div className="flex items-center gap-4">
                            <img 
                                src={logoWhatsapp}
                                alt="LOGO WHATSAPP"
                                className="w-5 h-5 lg:w-6 lg:h-6"
                            />
                            <p 
                                className="text-base font-medium text-black"
                                style={{ fontFamily: 'Clash Display' }}
                            >
                                687 10 46 90
                            </p>
                        </div>
                        <Link 
                            to={"#"}
                            className="text-base font-medium text-black no-underline hover:text-gray-700 transition-colors"
                            style={{ fontFamily: 'Clash Display' }}
                        >
                            Aviso Legal
                        </Link>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-48 w-full lg:w-auto">
                        <div className="flex items-center gap-4">
                            <img 
                                src={logoGoogle}
                                alt="LOGO GOOGLE"
                                className="w-5 h-5 lg:w-6 lg:h-6"
                            />
                            <p 
                                className="text-base font-medium text-black"
                                style={{ fontFamily: 'Clash Display' }}
                            >
                                flewstudio@gmail.com
                            </p>
                        </div>
                        <Link 
                            to={"#"}
                            className="text-base font-medium text-black no-underline hover:text-gray-700 transition-colors"
                            style={{ fontFamily: 'Clash Display' }}
                        >
                            Políticas de Privacidad
                        </Link>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-48 w-full lg:w-auto">
                        <div className="flex items-center gap-4">
                            <img 
                                src={logoInstagram}
                                alt="LOGO INSTAGRAM"
                                className="w-5 h-5 lg:w-6 lg:h-6"
                            />
                            <p 
                                className="text-base font-medium text-black"
                                style={{ fontFamily: 'Clash Display' }}
                            >
                                flewstudio
                            </p>
                        </div>
                        <Link 
                            to={"#"}
                            className="text-base font-medium text-black no-underline hover:text-gray-700 transition-colors"
                            style={{ fontFamily: 'Clash Display' }}
                        >
                            Política de Cookies
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}