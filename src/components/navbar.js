import '../styles/navbar.css' 
import React, { useState } from 'react';

function NavBar({setClickedValue}) {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(!isClicked)
    }

    const handleToggle = (value) => () => {
      setClickedValue(value);
    }
    
    return (
        <nav>
            <ul className={isClicked ? 
            "#nav-links active-m" : "#nav-links inactive-m"} 
            >
              <button 
                className='button'
                onClick={handleToggle("home")}
              >
                <li>Home</li>
              </button>

              <button 
                className='button'
                onClick={handleToggle("home")}
              >
              <li>Music Requests</li>
              </button>

              <button 
                className='button'
                onClick={handleToggle("menu")}
              >
                <li>Menu</li>
              </button>

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