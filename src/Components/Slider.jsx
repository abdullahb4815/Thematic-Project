import React, { useState } from 'react';
import './Slider.css';


const PriceRangeSlider = ({ min = 0, max = 400, onChange }) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    // variables for the sidebar state
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
        if (onChange) onChange([value, maxValue]);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
        if (onChange) onChange([minValue, value]);
    };

    return (
        <div className="slider-container">
            {/* container for the sidebar so that transformation covers it without affecting styling */}
            <button className={ `toggle-btn ${isOpen ? "open" : "closed"}`} onClick={toggleSidebar}>
                    {isOpen ? "<-" : "->"}
                    </button>
            <div className={`sidebar ${isOpen ? "open" : "closed"}`}>   
                    
                    <div className="filter-header">Filter</div>
                            <div className="price-section">
                                <div className="price-header">Price Range</div>
                                <div className="price-values">
                                    <span>${minValue}</span>
                                    <span>${maxValue}</span>
                                </div>
                                <div className="slider-inputs">
                                    <input
                                        type="range"
                                        min={min}
                                        max={max}
                                        value={minValue}
                                        onChange={handleMinChange}
                                        className="slider lower"
                                    />
                                    <input
                                        type="range"
                                        min={min}
                                        max={max}
                                        value={maxValue}
                                        onChange={handleMaxChange}
                                        className="slider"
                                    />
                                </div>
                            </div>
                </div>
            
        </div>
    );
};

export default PriceRangeSlider;