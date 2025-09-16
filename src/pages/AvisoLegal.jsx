import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Footer from "../components/Footer";

import bannerImg from "../assets/contacto/main-banner-contacto.png"; // Reutilizamos la imagen de contacto

export default function AvisoLegal() {
    return (
        <div className="pagina-aviso-legal bg-black">
            <Header />
            <MainBanner title={'AVISO LEGAL'} image={bannerImg} />
            
            {/* Contenido del Aviso Legal */}
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
                            AVISO LEGAL
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
                            {/* Identificación de la empresa */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">1. IDENTIFICACIÓN DE LA EMPRESA</h2>
                                <p className="mb-2">
                                    En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, ponemos a su disposición la siguiente información:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Denominación social:</strong> [RAZÓN SOCIAL FLEWSTUDIO]</li>
                                    <li><strong>NIF:</strong> [NIF/CIF]</li>
                                    <li><strong>Domicilio:</strong> [DIRECCIÓN COMPLETA]</li>
                                    <li><strong>Teléfono:</strong> 687 10 46 90</li>
                                    <li><strong>Email:</strong> flewstudio@gmail.com</li>
                                    <li><strong>Actividad:</strong> Diseño gráfico y producción textil</li>
                                </ul>
                            </section>

                            {/* Objeto del sitio web */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">2. OBJETO DEL SITIO WEB</h2>
                                <p>
                                    El presente sitio web tiene por objeto facilitar al público, en general, el conocimiento de las actividades que esta organización realiza y de los servicios que presta, concretamente servicios de diseño gráfico, identidad visual corporativa, branding, diseño textil, fabricación textil, asesoramiento personalizado y todos aquellos servicios relacionados con el diseño gráfico y la producción textil.
                                </p>
                            </section>

                            {/* Condiciones de uso */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">3. CONDICIONES DE USO</h2>
                                <p className="mb-4">
                                    El acceso a este sitio web es gratuito salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios.
                                </p>
                                <p className="mb-4">
                                    El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que FlewStudio ofrece a través de su sitio web y con carácter enunciativo pero no limitativo, a no emplearlos para:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
                                    <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos</li>
                                    <li>Provocar daños en los sistemas físicos y lógicos de FlewStudio, de sus proveedores o de terceras personas</li>
                                    <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados</li>
                                </ul>
                            </section>

                            {/* Responsabilidades */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">4. RESPONSABILIDADES</h2>
                                <p className="mb-4">
                                    FlewStudio no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador.
                                </p>
                                <p className="mb-4">
                                    Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSI-CE, FlewStudio se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, colaborando de forma activa en la retirada o en su caso bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, derechos de terceros o la moral y el orden público.
                                </p>
                            </section>

                            {/* Propiedad intelectual */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">5. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
                                <p className="mb-4">
                                    FlewStudio, por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
                                </p>
                                <p>
                                    Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de FlewStudio.
                                </p>
                            </section>

                            {/* Modificaciones */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">6. MODIFICACIONES</h2>
                                <p>
                                    FlewStudio se reserva el derecho a realizar las modificaciones que considere oportunas, sin aviso previo, en el contenido de su página web. Tanto en lo referente a los contenidos del sitio web como en las condiciones de uso del mismo.
                                </p>
                            </section>

                            {/* Enlaces */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">7. ENLACES</h2>
                                <p className="mb-4">
                                    En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, FlewStudio no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
                                </p>
                                <p>
                                    En ningún caso FlewStudio asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
                                </p>
                            </section>

                            {/* Legislación aplicable */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
                                <p>
                                    Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales más próximos a Córdoba, España.
                                </p>
                            </section>

                            {/* Fecha de actualización */}
                            <div className="mt-8 pt-6 border-t border-gray-300">
                                <p className="text-sm text-gray-600">
                                    Última actualización: 16/09/2025
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