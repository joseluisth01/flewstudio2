import React from "react";

export default function FormularioContacto() {
    return (
        <div className="bg-black flex justify-center">
            <div 
                className="w-full max-w-6xl mx-6 lg:mx-8 flex flex-col items-center"
                style={{
                    background: 'linear-gradient(to bottom, #fff600 0%, #fff600 60%, #000000 100%)'
                }}
            >
                
                {/* Título */}
                <h2 
                    className="text-black text-center font-semibold mt-8 lg:mt-12 pb-5 border-b-4 border-black w-11/12 mb-0"
                    style={{ 
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(24px, 4vw, 36px)',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        textShadow: '0px 2px 3px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    HAZ REALIDAD TU IDEA SIN MIEDO AL ÉXITO ;)
                </h2>
                
                {/* Texto descriptivo */}
                <p 
                    className="text-black text-center mt-6 lg:mt-8 mb-8 lg:mb-12 w-11/12 lg:w-5/6"
                    style={{ 
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(20px, 3.5vw, 32px)',
                        fontWeight: 300,
                        lineHeight: 'normal',
                        textShadow: '0px 0px 1px rgba(0, 0, 0, 1)'
                    }}
                >
                    ¿Vas a desperdiciar la oportunidad de darle vida a tus ideas? Te explicaremos y documentaremos todo el proceso de creación.
                </p>
                
                {/* Formulario */}
                <form action="#" className="w-full max-w-5xl px-6 lg:px-8 pb-8 lg:pb-12 space-y-8">
                    
                    {/* Campos superiores - Grid 2x2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="Nombre" 
                            required
                            className="h-12 px-4 border-0 bg-white text-black placeholder-gray-600"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '24px'
                            }}
                        />
                        <input 
                            type="text" 
                            name="empresa" 
                            id="empresa" 
                            placeholder="Empresa" 
                            required
                            className="h-12 px-4 border-0 bg-white text-black placeholder-gray-600"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '24px'
                            }}
                        />
                        <input 
                            type="tel" 
                            name="telefono" 
                            id="telefono" 
                            placeholder="Teléfono" 
                            required
                            className="h-12 px-4 border-0 bg-white text-black placeholder-gray-600"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '24px'
                            }}
                        />
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            required
                            className="h-12 px-4 border-0 bg-white text-black placeholder-gray-600"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '24px'
                            }}
                        />
                    </div>
                    
                    {/* Textarea */}
                    <textarea 
                        name="mensaje" 
                        id="mensaje" 
                        placeholder="Mensaje" 
                        required
                        rows="6"
                        className="w-full px-4 pt-4 border-0 bg-white text-black placeholder-gray-600 resize-none"
                        style={{ 
                            fontFamily: 'Clash Display',
                            fontWeight: 500,
                            fontSize: '24px'
                        }}
                    ></textarea>
                    
                    {/* Campos inferiores - Checkbox y Submit */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 lg:gap-6">
                        
                        {/* Campo de aceptación */}
                        <div className="flex items-center gap-3 flex-1">
                            <input 
                                type="checkbox" 
                                name="aceptacion" 
                                id="aceptacion" 
                                required
                                className="w-5 h-5 text-primary bg-white border-gray-300 rounded focus:ring-primary focus:ring-2"
                            />
                            <label 
                                htmlFor="aceptacion"
                                className="text-primary cursor-pointer"
                                style={{ 
                                    fontFamily: 'Clash Display',
                                    fontWeight: 500,
                                    fontSize: '24px'
                                }}
                            >
                                Acepto la Política de Privacidad
                            </label>
                        </div>
                        
                        {/* Botón Submit */}
                        <button 
                            type="submit"
                            className="bg-primary text-black px-8 py-3 hover:bg-yellow-500 transition-colors duration-300 cursor-pointer flex-1 sm:flex-none sm:w-1/2"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '24px'
                            }}
                        >
                            ENVIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}