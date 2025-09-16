const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // URL de tu frontend
    credentials: true
}));

app.use(express.json());

// Rate limiting - limitar requests por IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // máximo 5 formularios por IP cada 15 minutos
    message: {
        error: 'Demasiadas solicitudes desde esta IP. Inténtalo más tarde.'
    }
});

app.use('/api/contact', limiter);

// Configuración de Nodemailer con Hostinger
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT == 465, // true para puerto 465, false para otros puertos
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para limpiar datos de entrada
function sanitizeInput(str) {
    if (typeof str !== 'string') return '';
    return str.trim().replace(/[<>]/g, ''); // Remover caracteres peligrosos
}

// Endpoint para formulario de contacto completo
app.post('/api/contact/full', async (req, res) => {
    try {
        const { nombre, empresa, telefono, email, mensaje, aceptacion } = req.body;

        // Validaciones
        if (!nombre || !empresa || !telefono || !email || !mensaje || !aceptacion) {
            return res.status(400).json({ 
                error: 'Todos los campos son obligatorios' 
            });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ 
                error: 'Email no válido' 
            });
        }

        // Limpiar datos
        const cleanData = {
            nombre: sanitizeInput(nombre),
            empresa: sanitizeInput(empresa),
            telefono: sanitizeInput(telefono),
            email: sanitizeInput(email),
            mensaje: sanitizeInput(mensaje)
        };

        // Configurar el correo
        const mailOptions = {
            from: `"FlewStudio - Formulario Web" <${process.env.SMTP_USER}>`,
            to: 'joseluistirado02@gmail.com',
            subject: `Nuevo contacto desde la web - ${cleanData.empresa}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #fff600; background: #000; padding: 20px; text-align: center; margin: 0;">
                        NUEVO CONTACTO - FLEWSTUDIO
                    </h2>
                    
                    <div style="padding: 20px; border: 1px solid #ddd;">
                        <h3 style="color: #333; margin-top: 0;">Datos del Cliente:</h3>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #f9f9f9;">
                                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nombre:</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${cleanData.nombre}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Empresa:</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${cleanData.empresa}</td>
                            </tr>
                            <tr style="background-color: #f9f9f9;">
                                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Teléfono:</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${cleanData.telefono}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">
                                    <a href="mailto:${cleanData.email}">${cleanData.email}</a>
                                </td>
                            </tr>
                        </table>
                        
                        <h3 style="color: #333; margin-top: 20px;">Mensaje:</h3>
                        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #fff600;">
                            ${cleanData.mensaje.replace(/\n/g, '<br>')}
                        </div>
                        
                        <p style="margin-top: 20px; font-size: 12px; color: #666;">
                            Este correo fue enviado desde el formulario de contacto de flewstudio.com<br>
                            Fecha: ${new Date().toLocaleString('es-ES')}
                        </p>
                    </div>
                </div>
            `
        };

        // Enviar correo
        await transporter.sendMail(mailOptions);

        res.status(200).json({ 
            message: 'Mensaje enviado correctamente' 
        });

    } catch (error) {
        console.error('Error al enviar correo:', error);
        res.status(500).json({ 
            error: 'Error interno del servidor' 
        });
    }
});

// Endpoint para formulario de callback (nosotros te llamamos)
app.post('/api/contact/callback', async (req, res) => {
    try {
        const { nombre, telefono, aceptacion } = req.body;

        // Validaciones
        if (!nombre || !telefono || !aceptacion) {
            return res.status(400).json({ 
                error: 'Todos los campos son obligatorios' 
            });
        }

        // Limpiar datos
        const cleanData = {
            nombre: sanitizeInput(nombre),
            telefono: sanitizeInput(telefono)
        };

        // Configurar el correo
        const mailOptions = {
            from: `"FlewStudio - Solicitud Callback" <${process.env.SMTP_USER}>`,
            to: 'joseluistirado02@gmail.com',
            subject: `Solicitud de llamada - ${cleanData.nombre}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #fff600; background: #000; padding: 20px; text-align: center; margin: 0;">
                        SOLICITUD DE LLAMADA - FLEWSTUDIO
                    </h2>
                    
                    <div style="padding: 20px; border: 1px solid #ddd;">
                        <h3 style="color: #333; margin-top: 0;">Datos para Callback:</h3>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #f9f9f9;">
                                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nombre:</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${cleanData.nombre}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Teléfono:</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">
                                    <a href="tel:${cleanData.telefono}">${cleanData.telefono}</a>
                                </td>
                            </tr>
                        </table>
                        
                        <div style="background-color: #fff600; padding: 15px; margin-top: 20px; text-align: center;">
                            <strong>⚡ ACCIÓN REQUERIDA: Llamar al cliente</strong>
                        </div>
                        
                        <p style="margin-top: 20px; font-size: 12px; color: #666;">
                            Solicitud de callback desde flewstudio.com<br>
                            Fecha: ${new Date().toLocaleString('es-ES')}
                        </p>
                    </div>
                </div>
            `
        };

        // Enviar correo
        await transporter.sendMail(mailOptions);

        res.status(200).json({ 
            message: 'Solicitud de llamada enviada correctamente' 
        });

    } catch (error) {
        console.error('Error al enviar solicitud de callback:', error);
        res.status(500).json({ 
            error: 'Error interno del servidor' 
        });
    }
});

// Endpoint de prueba
app.get('/api/test', (req, res) => {
    res.json({ message: 'Servidor funcionando correctamente' });
});

// Manejar errores 404
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Endpoint no encontrado' });
});

// Manejar errores generales
app.use((error, req, res, next) => {
    console.error('Error no manejado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});