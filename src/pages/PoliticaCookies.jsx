import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Footer from "../components/Footer";

import bannerImg from "../assets/contacto/main-banner-contacto.png"; // Reutilizamos la imagen de contacto

export default function PoliticaCookies() {
    return (
        <div className="pagina-politica-cookies bg-black">
            <Header />
            <MainBanner title={'POLÍTICA DE COOKIES'} image={bannerImg} />
            
            {/* Contenido de la Política de Cookies */}
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
                            POLÍTICA DE COOKIES
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
                                <h2 className="text-xl font-bold mb-4 text-primary">1. ¿QUÉ SON LAS COOKIES?</h2>
                                <p className="mb-4">
                                    El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá.
                                </p>
                                <p className="mb-4">
                                    Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación. Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
                                </p>
                            </section>

                            {/* Información recopilada */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">2. INFORMACIÓN RECOPILADA</h2>
                                <p className="mb-4">
                                    La información recabada a través de las cookies puede incluir:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>La fecha y hora de visitas al Sitio Web</li>
                                    <li>Las páginas visionadas</li>
                                    <li>El tiempo que ha estado en el Sitio Web</li>
                                    <li>Los sitios visitados justo antes y después del mismo</li>
                                </ul>
                                <p className="mt-4">
                                    Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
                                </p>
                            </section>

                            {/* Consentimiento */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">3. CONSENTIMIENTO PARA EL USO DE COOKIES</h2>
                                <p className="mb-4">
                                    Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario.
                                </p>
                                <p>
                                    Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
                                </p>
                            </section>

                            {/* Tipos de cookies */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">4. TIPOS DE COOKIES UTILIZADAS</h2>
                                <p className="mb-4">
                                    En nuestro sitio web utilizamos diferentes tipos de cookies para mejorar su experiencia de navegación:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web</li>
                                    <li><strong>Cookies de personalización:</strong> Para recordar sus preferencias</li>
                                    <li><strong>Cookies analíticas:</strong> Para obtener información sobre el uso del sitio web</li>
                                    <li><strong>Cookies de redes sociales:</strong> Para la integración con plataformas sociales</li>
                                </ul>
                            </section>

                            {/* Cookies de redes sociales */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">5. COOKIES DE REDES SOCIALES</h2>
                                <p className="mb-4">
                                    FlewStudio incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario.
                                </p>
                                <p className="mb-4">
                                    Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales.
                                </p>
                                <p className="mb-4">
                                    Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Facebook:</strong>{' '}
                                        <a 
                                            href="https://www.facebook.com/policies/cookies/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            https://www.facebook.com/policies/cookies/
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Twitter:</strong>{' '}
                                        <a 
                                            href="https://twitter.com/es/privacy" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            https://twitter.com/es/privacy
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Instagram:</strong>{' '}
                                        <a 
                                            href="https://help.instagram.com/1896641480634370?ref=ig" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            https://help.instagram.com/1896641480634370?ref=ig
                                        </a>
                                    </li>
                                    <li>
                                        <strong>YouTube:</strong>{' '}
                                        <a 
                                            href="https://policies.google.com/privacy?hl=es-419&gl=mx" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            https://policies.google.com/privacy?hl=es-419&gl=mx
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Pinterest:</strong>{' '}
                                        <a 
                                            href="https://policy.pinterest.com/es/privacy-policy" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            https://policy.pinterest.com/es/privacy-policy
                                        </a>
                                    </li>
                                    <li>
                                        <strong>LinkedIn:</strong>{' '}
                                        <a 
                                            href="https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies
                                        </a>
                                    </li>
                                </ul>
                            </section>

                            {/* Gestión de cookies */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">6. DESHABILITAR, RECHAZAR Y ELIMINAR COOKIES</h2>
                                <p className="mb-4">
                                    El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer).
                                </p>
                                <p className="mb-4">
                                    En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando.
                                </p>
                                <p className="mb-4">
                                    A continuación, se proporcionan enlaces a las instrucciones para la gestión de cookies en los navegadores más comunes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Google Chrome:</strong>{' '}
                                        <a 
                                            href="https://support.google.com/chrome/answer/95647?hl=es" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            Gestionar cookies en Chrome
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Mozilla Firefox:</strong>{' '}
                                        <a 
                                            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            Gestionar cookies en Firefox
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Safari:</strong>{' '}
                                        <a 
                                            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            Gestionar cookies en Safari
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Microsoft Edge:</strong>{' '}
                                        <a 
                                            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:text-yellow-600 transition-colors"
                                        >
                                            Gestionar cookies en Edge
                                        </a>
                                    </li>
                                </ul>
                            </section>

                            {/* Advertencia sobre rechazo */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">7. LIMITACIONES POR RECHAZO DE COOKIES</h2>
                                <p>
                                    En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
                                </p>
                            </section>

                            {/* Actualizaciones */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">8. ACTUALIZACIONES DE LA POLÍTICA DE COOKIES</h2>
                                <p>
                                    FlewStudio puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
                                </p>
                            </section>

                            {/* Contacto */}
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-primary">9. CONTACTO</h2>
                                <p className="mb-4">
                                    Si tiene alguna duda acerca de esta Política de Cookies, puede contactar con nosotros en:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Email:</strong> flewstudio@gmail.com</li>
                                    <li><strong>Teléfono:</strong> 687 10 46 90</li>
                                    <li><strong>Web:</strong> https://flewstudio.com</li>
                                </ul>
                            </section>

                            {/* Fecha de actualización */}
                            <div className="mt-8 pt-6 border-t border-gray-300">
                                <p className="text-sm text-gray-600">
                                    Este documento de Política de Cookies ha sido actualizado el día 16/09/2025.
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