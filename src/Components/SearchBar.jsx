import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { searchApps, getDetails } from "../FunctionsSQL/FunctionsSql";


export default function SearchBar({ searchTerm, setSearchTerm, offset, setOffset, priceRange, selectedGenre }) {
    const [searchedApps, setSearchedApps] = useState([]);
    const [description, setDesc] = useState([]);
    const [mousePosition, setMousePosition] = useState({ y: 0 });
    // passes in price range as a parameter now which is retrieved from the slider function 
    useEffect(() => {
        const fetchData = async () => {
            const apps = await searchApps(searchTerm, offset, priceRange, selectedGenre);
            setSearchedApps(apps);
        };
        fetchData();
    }, [searchTerm, offset, priceRange, selectedGenre]);

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

    const priceWithCurrency = (price, currency) => {
        const currencies = {USD: "$", GBP: "£"} // Can add more currencies in future.

        if (price > 0) {
            return currencies[currency] + price;
        } else {
            return "Free";
        } 
    }


    function handleHover(appName) {

        setDesc(getDetails(appName));
        setMousePosition({

            y: event.clientY,
          });
        
    };

    function handleLeave(){
        setDesc("");
    };


    
   

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

              
                    <table>
                        <thead>
                            <tr className='row_header'>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Rating</th>
                                <th>Download Count</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody className='row_data'>
                            {searchedApps.map(app => (
                                <tr className='row_data' key={app.app_id}>
                                    <td>
                                        <div className='details_div'
                                            onMouseEnter={() => handleHover(app.app_name)}
                                            onMouseLeave={() => handleLeave()}
                                        > 
                                        {app.app_name}

                                        </div>
                                        
                                    </td>
                                    <td>{app.genre_type}</td>
                                    <td>{app.user_rating}</td>
                                    <td>{numberWithCommas(app.download_count)}</td>
                                    <td>{priceWithCurrency(app.price, app.currency_type)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <br />
                        

                    <button id='getMoreButton' onClick={handleGetMore}> See more -{">"} </button>



                    <div className='description_container' style={{top: mousePosition.y}}>
                        
                        {description}   
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



