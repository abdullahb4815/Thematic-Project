import React from "react";
import "./LandingPage.css";


export default function LandingPage() {

  return (
    // <div id="landing-page">
    //   <div id="landing-text">
    //     <h1 id="title">App Base</h1>
    //     <h2 id="title-tag">The best engine for app searching on the market </h2>
    //     <h3 id="description">
    //       App Base is a unique, up-to-date search engine designed specifically for discovering apps in the iOS App Store.
    //       Unlike the default store search, App Base makes it easier to find trending, new, and niche apps quickly with smarter filters and real-time updates.
    //       It helps users explore beyond the top charts, making app discovery more efficient and personalized.
    //     </h3>
    //   </div>
    // </div>


  <div>
    
    <div className="main_container">
        <div className="navbar">
            <img src="src\assets\icons8-server-64.png" alt="small logo of server" className="logo"/>
            <div className="menuClass">
                <nav>
                    <ul id="menuList">
                        <li> Home </li>
                        <li> About Us </li>
                        <li> Contact Us </li>
                    </ul>
                </nav>
            </div>

            <img src="images/bookShelfLogo/icons8-bookshelf-48.png" alt="small icon of bookshelf" className="menu-icon" onclick="toggleMenu()"/>

        </div>
        
        <div className="row">

            <div className="col-1">
                
                <h2>App/Base</h2>

                <h3>The best engine for app searching on the market </h3>

                <p> App Base is a unique, up-to-date search engine designed specifically for discovering apps in the iOS App Store.
                    Unlike the default store search, App Base makes it easier to find trending, new, and niche apps quickly with smarter filters and real-time updates.
                    It helps users explore beyond the top charts, making app discovery more efficient and personalized.</p>

                <h4>(Still a work in progress, Thematic project submission by: Yussuf Saleh,
                    Joshua Maynard, 
                    Abdullah Baig, 
                    Mushfiqur Rahaman,
                    Amir Dirow, 
                    Mohammed Abudaqen )
                </h4>

                <button type="button" className="basicButton"> Try The Demo Now!  </button>

            </div>
            <div className="col-2">
                <img src="src\assets\Images\ios_workspace_ipad.png" alt="database app image" className="introImg"/>
                
                <div className="color-box"></div>
            </div>
            

        </div>

    </div>



    </div>

    



  );
}

