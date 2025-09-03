import React from "react";

export default function ArticulosBlog({ title, articles})
{
    return (
        <div className="banner-articulos-blog">
            <div className="banner-articulos-blog-container">
                <h2 className="banner-articulos-blog-title">
                    <div
                        className="banner-articulos-blog-title-content"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </h2>
                {Object.entries(articles).map(([title, text], index, key) => {
                    return (
                        <div className="articulo-blog" key={key}>
                            <h3 className="articulo-blog-title">
                                {index}. 
                                <div
                                    className="articulo-blog-title-content"
                                    dangerouslySetInnerHTML={{ __html: title }}
                                />
                            </h3>
                            <p className="articulo-blog-text">
                                <div
                                    className="articulo-blog-text-content"
                                    dangerouslySetInnerHTML={{ __html: text }}
                                />
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}