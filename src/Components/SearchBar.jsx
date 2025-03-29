import React, {useState, useEffect}    from 'react';
import './SearchBar.css';
import {searchApps} from "../FunctionsSQL/FunctionsSql";
 

export default function SearchBar  (/*{ data, onSearch}*/)  {   
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => { 
        const value = event.target.value;
        setSearchTerm(value);




    // commented out as this is used to handle preloadedd data not when dynamically loading data
    // const filteredResults = data.filter(item =>
    //     item.app_name.toLowerCase().includes(value.toLowerCase())
    // );

    // onSearch(filteredResults); 
    };


    const [searchedApps, setSearchedApps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const apps = await searchApps(searchTerm);
        console.log(apps);
        setSearchedApps(apps);
        };
        fetchData();
    }, [searchTerm]);

    

    return (
        <div className='main-container'>
            <div className="search-container">

                <span class="material-symbols-outlined">
                    search
                </span>

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

            <div className='results-container'>
                <ul>
                    {searchedApps.map(app => (
                    <li key={app.app_id}>
                        <strong>ID:</strong> {app.app_id} - <strong>Name:</strong> {app.app_name} - <strong>Genre:</strong> {app.genre_table?.genre_type}
                    </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};



