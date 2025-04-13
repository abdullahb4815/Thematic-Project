import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { searchApps } from "../FunctionsSQL/FunctionsSql";


export default function SearchBar(/*{ data, onSearch}*/) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setOffSet(0);
        setSearchTerm(value);

        // commented out as this is used to handle preloadedd data not when dynamically loading data
        // const filteredResults = data.filter(item =>
        //     item.app_name.toLowerCase().includes(value.toLowerCase())
        // );

        // onSearch(filteredResults); 
    };

    const handleGetMore = () => {
        setOffSet(prevOffset => prevOffset + 20);

    }

    const [searchedApps, setSearchedApps] = useState([]);
    const [offSetInt, setOffSet] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const apps = await searchApps(searchTerm, offSetInt);
            console.log(apps);
            setSearchedApps(apps);
        };
        fetchData();
    }, [searchTerm, offSetInt]);

    if (searchedApps.length > 0) {
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
                    <table>
                        <thead>
                            <tr className='row_header'>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Rating</th>
                                <th>Download Count</th>
                                <th>Price</th>
                                <th>Currency</th>
                            </tr>
                        </thead>

                        <tbody className='row_data'>
                            {searchedApps.map(app => (
                                <tr className='row_data' key={app.app_id}>
                                    <td>{app.app_id}</td>
                                    <td>{app.app_name}</td>
                                    <td>{app.genre_type}</td>
                                    <td>{app.user_rating}</td>
                                    <td>{app.download_count}</td>
                                    <td>{app.price}</td>
                                    <td>{app.currency_type}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>

                    <button id='getMoreButton' onClick={handleGetMore}> See more -{">"} </button>
                </div>
            </div>
        );

    } else {
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

                <h3>No results found.</h3>

            </div>
        );
    }
};



