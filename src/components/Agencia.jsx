import React from "react";

export default function Agencia({ title, text, img, ctaText, img2, subtitle, text2, ctaText2})
{
    return (
        <div className="banner-agencia">
            <div className="banner-agencia-wrapper">
                <h2
                    className="banner-agencia-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <div className="banner-agencia-first-row">
                    <div
                        className="banner-agencia-text"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                    <img
                        src={img} 
                        alt="AGENCIA DE DISEÑO GRÁFICO FLEWSTUDIO"
                    />
                </div>
                <div className="banner-agencia-second-row">
                    <div className="banner-agencia-sr-lh">
                        <form action="/contacto" method="get" className="banner-agencia-cta">
                            <button className="explication-text">{ctaText}</button>
                        </form>
                        <img
                            src={img2} 
                            alt="SOLUCIONES A MEDIDA"
                        />
                        <form action="/contacto" method="get" className="banner-agencia-cta">
                            <button className="explication-text">{ctaText2}</button>
                        </form>
                    </div>
                    <div className="banner-agencia-sr-rh">
                        <h3
                            className="banner-agencia-subtitle"
                            dangerouslySetInnerHTML={{ __html: subtitle}}
                        />
                        <div
                            className="banner-agencia-text2"
                            dangerouslySetInnerHTML={{ __html: text2 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}