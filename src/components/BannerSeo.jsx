import React from "react";

export default function BannerSeo({ title, text })
{
    return (
        <div className="banner-seo">
            <div className="banner-seo-container">
                <h2 className="banner-seo-title">
                    <div 
                        className="banner-seo-title-content"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </h2>
                <p className="banner-seo-text">
                    <div
                        className="banner-seo-text-content"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </p>
            </div>
        </div>
    )
}