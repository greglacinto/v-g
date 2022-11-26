import '../styles/navbar.css' 
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
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
        </nav>
    );
}

export default NavBar;