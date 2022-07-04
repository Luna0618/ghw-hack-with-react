import React, {useState} from "react";
import '../stylesheets/App.css';

function NavBar(){
    const [showLinks, setShowLinks] = useState(false);
    return (
        <nav className="navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contacts'>Contacts</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>Open</button>
            </div>          
            <div className="rightSide">
                <input type="text" placeholder="Search"></input>
                <button className="searchButton">Search</button>

            </div>

        </nav>
    );
}

export default NavBar;