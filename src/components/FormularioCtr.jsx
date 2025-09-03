import React from "react";

export default function FormularioCtr() {
    return (
        <div className="bg-black flex justify-center">
            <div className="bg-primary w-full max-w-6xl mx-6 lg:mx-8 px-8 lg:px-12 py-8 lg:py-12">
                
                {/* Título */}
                <h2 
                    className="text-black text-center font-medium mb-8 lg:mb-10"
                    style={{ 
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(32px, 4vw, 40px)',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}
                >
                    NOSOTROS TE LLAMAMOS
                </h2>
                
                {/* Formulario */}
                <form action="#" className="space-y-6">
                    
                    {/* Fila de inputs */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                        
                        {/* Campo Nombre */}
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="NOMBRE" 
                            required
                            className="flex-1 h-12 px-4 border-0 rounded-none text-black placeholder-black bg-white"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '16px'
                            }}
                        />
                        
                        {/* Campo Teléfono */}
                        <input 
                            type="tel" 
                            name="telefono" 
                            id="telefono" 
                            placeholder="TELÉFONO" 
                            required
                            className="flex-1 h-12 px-4 border-0 rounded-none text-black placeholder-black bg-white"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    
                    {/* Fila inferior: Checkbox y Botón */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                        
                        {/* Campo de aceptación */}
                        <div className="flex items-center gap-3 flex-1">
                            <input 
                                type="checkbox" 
                                name="aceptacion" 
                                id="aceptacion" 
                                required
                                className="w-4 h-4 text-black bg-white rounded focus:ring-primary focus:ring-2"
                            />
                            <label 
                                htmlFor="aceptacion"
                                className="text-black cursor-pointer"
                                style={{ 
                                    fontFamily: 'Clash Display',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                }}
                            >
                                Acepto la Política de Privacidad
                            </label>
                        </div>
                        
                        {/* Botón Submit - mismo ancho que input teléfono */}
                        <button 
                            type="submit"
                            className="flex-1 bg-black text-primary h-12 hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '16px'
                            }}
                        >
                            RECIBIR LLAMADA
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}