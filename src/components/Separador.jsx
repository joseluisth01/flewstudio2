import React from "react";
import logo from "../assets/LOGONEGRO_1.png";

export default function Separador() {
    return (
        <div className="bg-black w-full h-11 flex items-center justify-center px-4">
            {/* Línea izquierda */}
            <div className="flex-1 h-1.5 bg-primary"></div>

            {/* Logo central con wrapper */}
            <div className="bg-primary p-1 mx-2 sm:mx-3 lg:mx-4 flex items-center justify-center">
                <img
                    src={logo}
                    alt="LOGOTIPO FLEWSTUDIO NEGRO"
                    className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:h-8 object-contain"
                />
            </div>

            {/* Línea derecha */}
            <div className="flex-1 h-1.5 bg-primary"></div>
        </div>
    );
}