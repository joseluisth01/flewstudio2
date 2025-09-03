import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Agencia from "../components/Agencia";
import Servicios from "../components/Servicios";
import Separador from "../components/Separador";
import Asesoria from "../components/Asesoria";
import FormularioContacto from "../components/FormularioContacto";
import Footer from "../components/Footer";

import serviciosFabricacion00 from "../assets/fabricacion/serviciosprofesionales1.png";
import serviciosFabricacion01 from "../assets/fabricacion/serviciosprofesionales2.png";
import serviciosFabricacion02 from "../assets/fabricacion/serviciosprofesionales3.png";
import serviciosFabricacion03 from "../assets/fabricacion/serviciosprofesionales4.png";
import serviciosFabricacion04 from "../assets/fabricacion/serviciosprofesionales5.png";
import serviciosFabricacion05 from "../assets/fabricacion/serviciosprofesionales6.png";

export default function FabricacionTextil() {
    const services = {
        "services00": {
            "title": "Gestión de Producción Textil",
            "text": "Nuestro punto fuerte es la capacidad de poder crear cualquier prenda para cualquier necesidad. Nos encargamos de todo el proceso de fabricación desde la primera muestra hasta su entrega final.",
            "img": serviciosFabricacion00
        },
        "services01": {
            "title": "Uniformes Laborales",
            "text": "Nos volcamos en cada pedido para que se luzca con nitidez y calidad el vestuario de tu equipo para transmitir confianza para tus clientes.",
            "img": serviciosFabricacion01
        },
        "services02": {
            "title": "Desarrollo de Muestras Textiles y Control de Calidad",
            "text": "Nos encargamos de que todo el proceso de fabricación sea óptimo con las indicaciones exactas del techpack de cada cliente.",
            "img": serviciosFabricacion02
        },
        "services03": {
            "title": "Sublimación Textil (Full - Print)",
            "text": "Contamos con la producción más avanzada y la impresión de última tecnología con la opción de crear tus propias prendas y con el diseño que quieras.",
            "img": serviciosFabricacion03
        },
        "services04": {
            "title": "Serigrafía Textil y DTF",
            "text": "Ofrecemos la posibilidad de estampar nuestras prendas con la última tecnología del mercado: el producto será finamente impreso y con acabado perfecto que tengas.",
            "img": serviciosFabricacion04
        },
        "services05": {
            "title": "Bordados Personalizados",
            "text": "Nuestros bordados se confeccionan con la mejor maquinaria del mercado dejando un diseño imposible de desenganchar y con diseño como con tu producción textil.",
            "img": serviciosFabricacion05
        },
    };

    return (
        <div className="pagina-fabricacion-textil">
            <Header />
            <MainBanner title={'FABRICACIÓN TEXTIL'} image={null}/>
            <Agencia
                title={'AGENCIA DE <span style="color: var(--color-primary)">PRODUCCIÓN TEXTIL</span>'}
                text={'En <b>FlewStudio</b>, convertimos tus ideas en productos textiles de alta calidad. Nos encargamos de la <b>gestión de producción</b>, el desarrollo de muestras y el contacto directo con fábricas y proveedores, su cuidado meticuloso según el techpack hasta su entrega final. Garantizando así un <b>proceso eficiente y controlado en cada etapa.</b><br><br><span style="font-weight: 600; font-size: 24px;">¿QUIERES EMPEZAR AHORA <span style="color: var(--color-primary);">CON LA CREACIÓN DE TUS PRENDAS?</span></span>'}
                img={null}
                ctaText={'PRESUPUESTO GRATIS'}
                img2={null}
                subtitle={'DALE UNA OPORTUNIDAD A TU MAYOR IDEA CON FLEWSTUDIO'}
                text2={'Nos enfocamos en <b>soluciones creativas y eficaces</b>, adaptadas a las necesidades de tu marca o negocio. Ya sea que busques <b>fabricación a medida</b>, personalización textil o desarrollo de muestras, estamos aquí para hacerlo realidad.<br><br>Estudiamos cada cliente desde su punto de partida para mejorar sus debilidades y fortalecer sus mejores cualidades.'}
                ctaText2={'CUÉNTANOS TU IDEA'}
            />
            <Servicios
                title={'SERVICIOS PROFESIONALES DE <span style="color: var(--color-primary)">PRODUCCIÓN TEXTIL</span>'}
                text={'Ofrecemos una multitud de servicios de producción textil para solventar todas tus preocupaciones:'}
                services={services}
            />
            <Separador />
            <Asesoria
                title={'DIFERENTES PROBLEMAS, <span style="color: var(--color-primary)">DIFERENTES SOLUCIONES</span>'}
                text={'Ofrecemos distintas consultorías enfocadas en dar soluciones a diferentes problemas y/o necesidades.'}
                img={null}
                title2={'GARANTÍAS PROFESIONALES DE <span style="color: var(--color-primary)">ASESORAMIENTO PERSONALIZADO</span>'}
                text2={'Nos volcamos con nuestros servicios de asesoría para subsanar todas tus inquietudes: <br><br><b>Gestión de Proyectos y Control del Presupuesto</b><br>Ayudamos a incrementar la rentabilidad de cada cliente y a reducir el margen de error desde el punto de vista comercial y técnico del producto.<br><br><b>Estudio de Tendencias y Mercados</b><br>Estamos constantemente observando tendencias para posicionar a nuestros clientes para posicionar su marca o sector desde el punto de vista visual tanto como con su producción textil.<br><br><b>Consultoría de Marca</b><br>Estudiamos cada cliente desde su punto de partida para mejorar sus debilidades y fortalece sus mejores cualidades.'}
                ctaText={'PRESUPUESTO GRATIS'}
            />
            <FormularioContacto />
            <Footer />
        </div>
    )
}