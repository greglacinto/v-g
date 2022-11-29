import '../styles/navbar.css' 
import {Link} from 'react-router-dom';
import React, { useState } from 'react';

function NavBar() {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(!isClicked)
    }
    
    return (
        <nav>
            <ul className={isClicked ? 
            "#nav-links active-m" : "#nav-links inactive-m"} 
            >
                <Link to={`/`}
                style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                <li>Music Requests</li>
                <Link to={`/menu`} 
                style={{ textDecoration: 'none' }}>
                    <li>Menu</li>
                </Link>

            </ul>

            <div id="mobile" onClick={handleClick}>
                    <i id="bar"
                    className={isClicked ? 'fas fa-times' : 'fas fa-bars'}
                    >
                    </i>
                    
            </div>
        </nav>
    );
}

export default NavBar;