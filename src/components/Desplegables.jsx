import React, { useState } from "react";

export default function Desplegables({ dropdowns }) {
    const [visibleStates, setVisibleStates] = useState(
        Object.keys(dropdowns).reduce((acc, key) => {
            acc[key] = false; 
            return acc;
        }, {})
    );

    const toggleVisibility = (key) => {
        setVisibleStates(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="desplegables">
            <div className="desplegables-wrapper">
                {Object.entries(dropdowns).map(([key, { title, shown, hidden }]) => (
                    <div key={key} className="dropdown-item">
                        <h3 className="dropdown-item-title">{title}</h3>
                        <div className="dropdown-item-wrapper">
                            <p 
                                className="dropdown-item-text explication-text"
                                dangerouslySetInnerHTML={{ __html: visibleStates[key] ? hidden : shown }}
                            />
                            <button className="dropdown-item-button" onClick={() => toggleVisibility(key)}>
                                {visibleStates[key] ? "-" : "+"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
