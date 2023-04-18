import Header from './header';
import NavBar from './navbar';


import '../App.css';
import MenuInfo from './menuinfo';

function Menu() {
    return (
        <div className='w-60'>
            <Header />
            <NavBar />
            <MenuInfo />
        </div>
    )
}

export default Menu;