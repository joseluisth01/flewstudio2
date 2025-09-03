import React from "react";

export default function Servicios({ title, text, services })
{
    function toRoman( number )
    {
        const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
        return romanNumbers[number] || number;
    }

    return (
        <div className="banner-servicios">
            <div className="banner-servicios-wrapper">
                <h2 className="banner-servicios-title titulos-banners">
                    <div
                        className="banner-servicios-title-content"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </h2>
                <p 
                    className="banner-servicios-seotext explication-text"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                <div className="servicios">
                    {Object.entries(services).map(([key, value], index) => {
                        return (
                            <div className="servicio-element" key={key}>
                                <div className="servicio-element-text-wrapper">
                                    <div className="servicio-element-roman">
                                        <div className="inner-roman">
                                            {toRoman(index)}
                                            <div className="roman-line" />
                                        </div>
                                    </div>
                                    <div className="servicio-element-title-text">
                                        <span
                                            className="servicio-element-title"
                                            dangerouslySetInnerHTML={{ __html: value.title }}
                                        />
                                        <br></br>
                                        <span
                                            className="servicio-element-text explication-text"
                                            dangerouslySetInnerHTML={{ __html: value.text }}
                                        />
                                    </div>
                                </div>
                                <div className="servicio-element-img-wrapper">
                                    <img 
                                        src={value.img} 
                                        alt={key}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <form action="/contacto" method="get" className="banner-servicios-cta">
                    <button className="explication-text">¡QUIERO MEJORAR MI MARCA!</button>
                </form>
            </div>
        </div>
    )
}