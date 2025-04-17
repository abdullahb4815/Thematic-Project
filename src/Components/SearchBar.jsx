import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { searchApps } from "../FunctionsSQL/FunctionsSql";


export default function SearchBar({ searchTerm, setSearchTerm, offset, setOffset, priceRange }) {
    const [searchedApps, setSearchedApps] = useState([]);
    // passes in price range as a parameter now which is retrieved from the slider function 
    useEffect(() => {
        const fetchData = async () => {
            const apps = await searchApps(searchTerm, offset, priceRange);
            setSearchedApps(apps);
        };
        fetchData();
    }, [searchTerm, offset, priceRange]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setOffset(0);
        setSearchTerm(value);
    };

    const handleGetMore = () => {
        setOffset(prev => prev + 20);
    };



    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


   

    if (searchedApps.length > 0) {
        return (
            <div className='main-container'>
                <div className="search-container">

                    <span className="material-symbols-outlined">
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
                                    <td>{app.app_name}</td>
                                    <td>{app.genre_type}</td>
                                    <td>{app.user_rating}</td>
                                    <td>{numberWithCommas(app.download_count)}</td>
                                    <td>{app.price || "Free"}</td>
                                    <td>{app.currency_type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <br />
                        

                    <button id='getMoreButton' onClick={handleGetMore}> See more -{">"} </button>
                </div>
            </div>
        );

    } else {
        return (
            <div className='main-container'>
                <div className="search-container">

                    <span className="material-symbols-outlined">
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

                <h3 id='no_results_banner'>No results found.</h3>

            </div>
        );
    }
};



