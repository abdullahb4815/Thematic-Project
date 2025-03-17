import React, {useState}    from 'react';
import './Search bar.css';
 

const SearchBar = ({ data, onSearch}) => {   
    const {searchTerm, setSearchTerm} = useState('');

    const handleSearch = (event) => { 
        const value = event.target.value;
        setSearchTerm(value);

    const filteredResults = data.filter(item =>
        item.app_name.toLowerCase().includes(value.toLowerCase())
    );

    onSearch(filteredResults); 
    };

    return (
        <div className="search-container">
            <i className="fas fa-bars menu-icon"></i>
            <div className="search-wrapper">
            <input
            type="text"
            placeholder="Search Apps by name or genre" 
            value={searchTerm}
            onChange={handleSearch} 
            className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
        </div>
    </div>
    );
};

export default SearchBar;

