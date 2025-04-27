import React, { useState } from 'react';
import './Slider.css';

const genres = [
    "Sports", "Finance", "Book", "Entertainment", "Catalogs",
    "Photo & Video", "Food & Drink", "Medical", "Navigation",
    "Utilities", "Weather", "Travel", "Shopping", "Music",
    "News", "Lifestyle", "Productivity", "Social Networking",
    "Games", "Business", "Health & Fitness", "Education"
];

const PriceRangeSlider = ({ min = 0, max = 400, onChange, onGenreChange }) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);
    const [selectedGenre, setSelectedGenre] = useState('');

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

    const handleGenreChange = (e) => {
        const genre = e.target.value;
        setSelectedGenre(genre);
        if (onGenreChange) onGenreChange(genre);
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
                                        min={0}
                                        max={349}
                                        value={minValue}
                                        onChange={handleMinChange}
                                        className="slider lower"
                                    />
                                    <input
                                        type="range"
                                        min={1}
                                        max={max}
                                        value={maxValue}
                                        onChange={handleMaxChange}
                                        className="slider"
                                    />
                                </div>
                            </div>
                            <div className="genre-section">
                                <div className="genre-header">Genre</div>
                                <select 
                                    value={selectedGenre} 
                                    onChange={handleGenreChange}
                                    className="genre-select"
                                >
                                    <option value="">All Genres</option>
                                    {genres.map((genre) => (
                                        <option key={genre} value={genre}>{genre}</option>
                                    ))}
                                </select>
                            </div>
                </div>
            
        </div>
    );
};

export default PriceRangeSlider;