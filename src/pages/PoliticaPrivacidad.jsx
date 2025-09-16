import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Footer from "../components/Footer";

import bannerImg from "../assets/contacto/main-banner-contacto.png"; // Reutilizamos la imagen de contacto

export default function PoliticaPrivacidad() {
    return (
        <div className="pagina-politica-privacidad bg-black">
            <Header />
            <MainBanner title={'POLÍTICA DE PRIVACIDAD'} image={bannerImg} />
            
            {/* Contenido de la Política de Privacidad */}
            <div className="bg-black py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    
                    {/* Contenido principal */}
                    <div className="bg-white p-8 lg:p-12 rounded-lg">
                        
                        <h1 
                            className="text-black text-center font-bold mb-8"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: 'clamp(28px, 4vw, 36px)',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}
                        >
                            POLÍTICA DE PRIVACIDAD
                        </h1>

                        <div 
                            className="text-black space-y-6"
                            style={{
                                fontFamily: 'Clash Display',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            {/* Introducción */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">1. INFORMACIÓN AL USUARIO</h2>
                                <p className="mb-4">
                                    En cumplimiento de lo dispuesto en el Reglamento General de Protección de Datos (UE) 2016/679 de 27 de abril de 2016 (RGPD) y en la Ley Orgánica 3/2018 de 5 de diciembre de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD), le informamos que:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Responsable del tratamiento:</strong> [RAZÓN SOCIAL FLEWSTUDIO]</li>
                                    <li><strong>NIF:</strong> [NIF/CIF]</li>
                                    <li><strong>Domicilio:</strong> [DIRECCIÓN COMPLETA]</li>
                                    <li><strong>Teléfono:</strong> 687 10 46 90</li>
                                    <li><strong>Email:</strong> flewstudio@gmail.com</li>
                                </ul>
                            </section>

                            {/* Finalidad del tratamiento */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">2. FINALIDAD DEL TRATAMIENTO DE DATOS</h2>
                                <p className="mb-4">Los datos personales que nos proporcione serán tratados con las siguientes finalidades:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Contacto y consultas:</strong> Para atender y responder a sus consultas, solicitudes de información sobre nuestros servicios de diseño gráfico y producción textil</li>
                                    <li><strong>Prestación de servicios:</strong> Para la ejecución y seguimiento de los servicios contratados</li>
                                    <li><strong>Comunicaciones comerciales:</strong> Para enviarle información sobre nuestros servicios, ofertas y novedades (siempre que haya prestado su consentimiento)</li>
                                    <li><strong>Cumplimiento de obligaciones legales:</strong> Para cumplir con las obligaciones fiscales, contables y administrativas</li>
                                    <li><strong>Gestión de presupuestos:</strong> Para elaborar y enviar presupuestos personalizados</li>
                                </ul>
                            </section>

                            {/* Base jurídica */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">3. BASE JURÍDICA DEL TRATAMIENTO</h2>
                                <p className="mb-4">La base jurídica para el tratamiento de sus datos personales es:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones comerciales y tratamiento de consultas</li>
                                    <li><strong>Ejecución contractual:</strong> Para la prestación de los servicios solicitados</li>
                                    <li><strong>Interés legítimo:</strong> Para el mantenimiento de la relación comercial y mejora de nuestros servicios</li>
                                    <li><strong>Cumplimiento de obligaciones legales:</strong> Para cumplir con normativas fiscales y mercantiles</li>
                                </ul>
                            </section>

                            {/* Datos recopilados */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">4. DATOS PERSONALES RECOPILADOS</h2>
                                <p className="mb-4">Recopilamos los siguientes tipos de datos personales:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Datos identificativos:</strong> Nombre, apellidos, DNI/NIF</li>
                                    <li><strong>Datos de contacto:</strong> Dirección postal, teléfono, email</li>
                                    <li><strong>Datos profesionales:</strong> Empresa, cargo, sector de actividad</li>
                                    <li><strong>Datos del proyecto:</strong> Información sobre los servicios solicitados, presupuestos, especificaciones técnicas</li>
                                    <li><strong>Datos de navegación:</strong> Dirección IP, cookies, datos de acceso al sitio web</li>
                                </ul>
                            </section>

                            {/* Destinatarios */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">5. DESTINATARIOS DE LOS DATOS</h2>
                                <p className="mb-4">Sus datos personales podrán ser comunicados a:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Proveedores de servicios:</strong> Empresas que nos prestan servicios de hosting, email marketing, gestión administrativa</li>
                                    <li><strong>Proveedores textiles:</strong> Fabricantes y proveedores necesarios para la ejecución de proyectos de producción textil</li>
                                    <li><strong>Organismos públicos:</strong> Cuando sea requerido por ley (Agencia Tributaria, Seguridad Social, etc.)</li>
                                    <li><strong>Entidades financieras:</strong> Para la gestión de cobros y pagos</li>
                                </ul>
                                <p>No se realizarán transferencias internacionales de datos salvo que sea necesario para la prestación del servicio y siempre con las garantías adecuadas.</p>
                            </section>

                            {/* Conservación de datos */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">6. CONSERVACIÓN DE DATOS</h2>
                                <p className="mb-4">Los datos personales se conservarán durante los siguientes plazos:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Datos de contacto y consultas:</strong> Hasta que retire el consentimiento o solicite la supresión</li>
                                    <li><strong>Datos contractuales:</strong> Durante la vigencia del contrato y posteriormente durante los plazos legalmente establecidos (6 años para obligaciones fiscales)</li>
                                    <li><strong>Datos para comunicaciones comerciales:</strong> Hasta que retire el consentimiento</li>
                                    <li><strong>Datos de navegación web:</strong> Según se establece en nuestra Política de Cookies</li>
                                </ul>
                            </section>

                            {/* Derechos del usuario */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">7. DERECHOS DEL INTERESADO</h2>
                                <p className="mb-4">Usted tiene derecho a:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                                    <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                                    <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
                                    <li><strong>Limitación:</strong> Solicitar la restricción del tratamiento de sus datos</li>
                                    <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado para transmitirlos a otro responsable</li>
                                    <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                                    <li><strong>Retirada del consentimiento:</strong> Retirar el consentimiento otorgado en cualquier momento</li>
                                </ul>
                                <p className="mt-4">
                                    Para ejercer estos derechos, puede contactar con nosotros en <strong>flewstudio@gmail.com</strong> o en la dirección postal indicada, adjuntando copia de su DNI o documento identificativo equivalente.
                                </p>
                                <p className="mt-2">
                                    Si considera que no hemos atendido correctamente sus derechos, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
                                </p>
                            </section>

                            {/* Medidas de seguridad */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">8. MEDIDAS DE SEGURIDAD</h2>
                                <p className="mb-4">
                                    Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Cifrado SSL en las comunicaciones</li>
                                    <li>Acceso restringido a los datos por personal autorizado</li>
                                    <li>Sistemas de backup y recuperación</li>
                                    <li>Auditorías periódicas de seguridad</li>
                                    <li>Protocolos de notificación de brechas de seguridad</li>
                                </ul>
                            </section>

                            {/* Formularios de contacto */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">9. FORMULARIOS DE CONTACTO</h2>
                                <p className="mb-4">
                                    Los datos introducidos en los formularios de contacto de nuestro sitio web serán utilizados exclusivamente para atender su consulta y enviarle la información solicitada. El tratamiento se basa en su consentimiento al rellenar y enviar el formulario.
                                </p>
                                <p>
                                    Al marcar la casilla "Acepto la Política de Privacidad" confirma que ha leído y acepta el tratamiento de sus datos conforme a esta política.
                                </p>
                            </section>

                            {/* Cookies */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">10. COOKIES</h2>
                                <p>
                                    Este sitio web utiliza cookies para mejorar la experiencia del usuario. Para más información sobre el uso de cookies, consulte nuestra <strong>Política de Cookies</strong>.
                                </p>
                            </section>

                            {/* Modificaciones */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">11. MODIFICACIONES DE LA POLÍTICA DE PRIVACIDAD</h2>
                                <p>
                                    FlewStudio se reserva el derecho a modificar esta Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o cambios en nuestros servicios. Las modificaciones introducidas entrarán en vigor desde su publicación en el sitio web.
                                </p>
                            </section>

                            {/* Contacto del DPO */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">12. CONTACTO</h2>
                                <p className="mb-4">
                                    Para cualquier consulta sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, puede contactar con nosotros:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Email:</strong> flewstudio@gmail.com</li>
                                    <li><strong>Teléfono:</strong> 687 10 46 90</li>
                                    <li><strong>Dirección postal:</strong> [DIRECCIÓN COMPLETA]</li>
                                </ul>
                            </section>

                            {/* Fecha de actualización */}
                            <div className="mt-8 pt-6 border-t border-gray-300">
                                <p className="text-sm text-gray-600">
                                    Última actualización: [FECHA DE ÚLTIMA ACTUALIZACIÓN]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}