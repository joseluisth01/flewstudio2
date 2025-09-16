import React, { useState } from "react";

export default function FormularioCtr() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        aceptacion: false
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        // Validaciones básicas
        if (!formData.nombre || !formData.telefono || !formData.aceptacion) {
            setMessage({ type: 'error', text: 'Por favor, completa todos los campos y acepta la política de privacidad.' });
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/contact/callback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: '¡Solicitud enviada! Te llamaremos pronto.' });
                setFormData({
                    nombre: '',
                    telefono: '',
                    aceptacion: false
                });
            } else {
                setMessage({ type: 'error', text: result.error || 'Error al enviar la solicitud. Inténtalo de nuevo.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage({ type: 'error', text: 'Error de conexión. Por favor, inténtalo más tarde.' });
        } finally {
            setIsLoading(false);
        }
    };

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

                {/* Mensaje de estado */}
                {message.text && (
                    <div className={`mb-6 p-4 rounded ${
                        message.type === 'success' 
                            ? 'bg-green-100 text-green-700 border border-green-300' 
                            : 'bg-red-100 text-red-700 border border-red-300'
                    }`}>
                        <p style={{ fontFamily: 'Clash Display', fontWeight: 500, fontSize: '16px' }}>
                            {message.text}
                        </p>
                    </div>
                )}
                
                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Fila de inputs */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                        
                        {/* Campo Nombre */}
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="NOMBRE" 
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="flex-1 h-12 px-4 border-0 rounded-none text-black placeholder-black bg-white disabled:opacity-50"
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
                            value={formData.telefono}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="flex-1 h-12 px-4 border-0 rounded-none text-black placeholder-black bg-white disabled:opacity-50"
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
                                checked={formData.aceptacion}
                                onChange={handleChange}
                                disabled={isLoading}
                                className="w-4 h-4 text-black bg-white rounded focus:ring-primary focus:ring-2 disabled:opacity-50"
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
                            disabled={isLoading}
                            className="flex-1 bg-black text-primary h-12 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ 
                                fontFamily: 'Clash Display',
                                fontWeight: 500,
                                fontSize: '16px'
                            }}
                        >
                            {isLoading ? 'ENVIANDO...' : 'RECIBIR LLAMADA'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}