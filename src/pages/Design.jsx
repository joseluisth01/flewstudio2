import React from "react";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Agencia from "../components/Agencia";
import Servicios from "../components/Servicios";
import Separador from "../components/Separador";
import Asesoria from "../components/Asesoria";
import FormularioContacto from "../components/FormularioContacto";
import Footer from "../components/Footer";

import bannerImg from "../assets/design/main-banner-design.png";

import agenciaDesign00 from "../assets/design/agencia-design-00.png";
import agenciaDesign01 from "../assets/design/agencia-design-01.png";

import serviciosDesign00 from "../assets/design/servicios-design-00.png";
import serviciosDesign01 from "../assets/design/servicios-design-01.png";
import serviciosDesign02 from "../assets/design/servicios-design-02.png";
import serviciosDesign03 from "../assets/design/servicios-design-03.png";
import serviciosDesign04 from "../assets/design/servicios-design-04.png";
import serviciosDesign05 from "../assets/design/servicios-design-05.png";

import asesoriaDesign00 from "../assets/design/asesoria-design-00.png";

export default function Design()
{
    const services = {
        "services00": {
            "title": "Identidad Visual Corporativa",
            "text": "Para construir una base sólida para tu marca.",
            "img": serviciosDesign00
        },
        "services01": {
            "title": "Branding y Rebranding",
            "text": "De marca para mantener tu imagen fresca y relevante",
            "img": serviciosDesign01
        },
        "services02": {
            "title": "Diseño Textil",
            "text": "Desde diseño de camisetas y sudaderas hasta diseño de pantalones, gorras y todo tipo de prendas.",
            "img": serviciosDesign02
        },
        "services03": {
            "title": "Diseño de logos e Identidad de marca",
            "text": "Crea una primera impresión memorable con un logo distintivo y una identidad de marca cohesiva que refleje los valores y la esencia de tu empresa.",
            "img": serviciosDesign03
        },
        "services04": {
            "title": "Material Publicitario y de Marketing",
            "text": "Desde folletos y flyers hasta carteles y publicidad exterior, diseñamos materiales que capturan la atención y comunican tu mensaje eficazmente.",
            "img": serviciosDesign04
        },
        "services05": {
            "title": "Diseño de Packaging y Etiquetas",
            "text": "Mejora tu presencia offline con diseños atractivos y contenido visual llamativo para mejorar la experiencia de compra.",
            "img": serviciosDesign05
        },
    };

    return (
        <div className="pagina-design">
            <Header />
            <MainBanner title={'DISEÑO'} image={bannerImg}/>
            <Agencia
                title={'AGENCIA DE <span style="color: var(--color-primary)">DISEÑO GRÁFICO</span>'}
                text={'En <b>FlewStudio</b>, entendemos que cada marca tiene una historia única que contar. Nos especializamos en transformar ideas en <b>experiencias visuales</b> impactantes, que comunican efectivamente el <b>valor de tu negocio</b> a tu audiencia objetivo. Desde el concepto hasta la implementación final, te acompañamos en cada paso para asegurar que tu mensaje se destaque en un mercado competitivo.<br><br><span style="font-weight: 600; font-size: 24px;">¿QUIERES EMPEZAR AHORA <span style="color: var(--color-primary);">CON LA CREACIÓN DE TU PRESENCIA ONLINE Y/O OFFLINE?</span></span>'}
                img={agenciaDesign00}
                ctaText={'PRESUPUESTO GRATIS'}
                img2={agenciaDesign01}
                subtitle={'SOLUCIONES CREATIVAS A MEDIDA PARA TU NEGOCIO'}
                text2={'Desde <b>estudio de diseño gráfico</b> hasta su implementación, te ofrecemos una gama completa de servicios para llevar tu visión a la realidad.<br><br>Nos dedicamos a entender profundamente tu negocio, tu mercado y tus objetivos para crear <b>soluciones de diseño gráfico personalizadas</b> que no sólo luzcan increíbles, sino que también generen resultados reales. Ya sea que necesites <b>revitalizar tu marca o lanzar un nuevo producto.</b><br><br><b>Especializados en tipos de diseño gráfico que impulsan el éxito.</b> Ya sea diseño de <b>packaging, flyers, o diseño de productos gráficos,</b> personalizamos cada proyecto según tus necesidades. Nuestros <b>presupuestos de diseño gráfico</b> son transparentes y competitivos, asegurando calidad sin comprometer tu inversión.'}
                ctaText2={'HÁBLANOS DE TU PROYECTO'}
            />
            <Servicios
                title={'SERVICIOS PROFESIONALES DE <span style="color: var(--color-primary)">DISEÑO GRÁFICO</span>'}
                text={'Ofrecemos una amplia gama de servicios de diseño gráfico para cubrir todas tus necesidades:'}
                services={services}
            />
            <Separador />
            <Asesoria
                title={'DIFERENTES PROBLEMAS <span style="color: var(--color-primary)">DIFERENTES SOLUCIONES</span>'}
                text={'Ofrecemos distintas consultorías enfocadas en dar soluciones a diferentes problemas y/o necesidades.'}
                img={asesoriaDesign00}
                title2={'<span style="color: var(--color-primary)">ASESORÍA DE DISEÑO GRÁFICO</span>'}
                text2={'Analizamos tu marca desde todos los ángulos y te damos las claves para que consigas convertir en fanáticos a tus clientes.'}
                ctaText={'HÁBLANOS DE TU PROYECTO'}
            />
            <FormularioContacto />
            <Footer />
        </div>
    )
}