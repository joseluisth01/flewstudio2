import React from "react";

export default function Asesoria({ title, text, img, title2, text2, ctaText })
{
    return (
        <div className="banner-asesoria">
            <div className="banner-asesoria-wrapper">
                <h2
                    className="banner-asesoria-title titulos-banners"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                    className="banner-asesoria-seotext explication-text"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                <div className="banner-asesoria-img-container">
                    <img
                        src={img} 
                        alt="ASESORÍA FLEWSTUDIO"
                    />
                </div>
                <h2
                    className="banner-asesoria-title-2 titulos-banners"
                    dangerouslySetInnerHTML={{ __html: title2 }}
                />
                <p
                    className="banner-asesoria-seotext-2 subinfo-slides"
                    dangerouslySetInnerHTML={{ __html: text2 }}
                />
                <form action="/contacto" method="get" className="banner-asesoria-form">
                    <button className="explication-text">{ctaText}</button>
                </form>
            </div>
        </div>
    )
}