import React, { useState } from "react";

export default function FormularioContacto({ descriptiveText }) {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        telefono: '',
        email: '',
        mensaje: '',
        aceptacion: false
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Texto por defecto si no se proporciona ninguno
    const defaultText = "¿Vas a desperdiciar la oportunidad de darle vida a tus ideas? Te explicaremos y documentaremos todo el proceso de creación.";
    
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
        if (!formData.nombre || !formData.empresa || !formData.telefono || !formData.email || !formData.mensaje || !formData.aceptacion) {
            setMessage({ type: 'error', text: 'Por favor, completa todos los campos y acepta la política de privacidad.' });
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/contact/full`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: '¡Mensaje enviado correctamente! Te contactaremos pronto.' });
                setFormData({
                    nombre: '',
                    empresa: '',
                    telefono: '',
                    email: '',
                    mensaje: '',
                    aceptacion: false
                });
            } else {
                setMessage({ type: 'error', text: result.error || 'Error al enviar el mensaje. Inténtalo de nuevo.' });
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
            <div
                className="w-full max-w-6xl mx-6 lg:mx-8 flex flex-col items-center"
                style={{
                    background: 'linear-gradient(to bottom, #FFF600 0%, #FFF600 38%, #000000 100%)'
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

                {/* Texto descriptivo personalizable */}
                <p
                    className="text-black text-center mt-6 lg:mt-8 mb-8 lg:mb-12 w-11/12 lg:w-5/6"
                    style={{
                        fontFamily: 'Clash Display',
                        fontSize: 'clamp(20px, 3.5vw, 32px)',
                        fontWeight: 300,
                        lineHeight: 'normal',
                        textShadow: '0px 0px 3px rgba(0, 0, 0, 1)'
                    }}
                >
                    {descriptiveText || defaultText}
                </p>

                {/* Mensaje de estado */}
                {message.text && (
                    <div className={`w-full max-w-5xl px-6 lg:px-8 mb-4 p-4 rounded ${
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
                <form onSubmit={handleSubmit} className="w-full max-w-5xl px-6 lg:px-8 pb-8 lg:pb-12 space-y-8">

                    {/* Campos superiores - Grid 2x2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Nombre"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="h-12 px-4 border-0 bg-white text-black placeholder-gray-600 disabled:opacity-50"
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
                            value={formData.empresa}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="h-12 px-4 border-0 bg-white text-black placeholder-gray-600 disabled:opacity-50"
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
                            value={formData.telefono}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="h-12 px-4 border-0 bg-white text-black placeholder-gray-600 disabled:opacity-50"
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
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="h-12 px-4 border-0 bg-white text-black placeholder-gray-600 disabled:opacity-50"
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
                        value={formData.mensaje}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full px-4 pt-4 border-0 bg-white text-black placeholder-gray-600 resize-none disabled:opacity-50"
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
                                checked={formData.aceptacion}
                                onChange={handleChange}
                                disabled={isLoading}
                                className="w-5 h-5 text-primary bg-white border-gray-300 rounded focus:ring-primary focus:ring-2 disabled:opacity-50"
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
                            disabled={isLoading}
                            className="bg-primary text-black px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer flex-1 sm:flex-none sm:w-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                fontFamily: 'Clash Display',
                                fontWeight: 900,
                                fontSize: '24px'
                            }}
                        >
                            {isLoading ? 'ENVIANDO...' : 'ENVIAR'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}