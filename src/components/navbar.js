import '../styles/navbar.css' 
import {Link} from 'react-router-dom';
import { Component } from 'react';

class NavBar extends Component {
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked,
        })
    }

    render() {
        return (
            <nav>
                <ul className={this.state.clicked ? 
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

                <div id="mobile" onClick={this.handleClick}>
                        <i id="bar"
                        className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
                        >
                        </i>
                       
                </div>
            </nav>
        );
    }
}

export default NavBar;