import Header from './header';
import NavBar from './navbar';
import {Timer} from './timer';


import '../App.css';
import MenuInfo from './menuinfo';

function Menu() {
    return (
        <div className='w-80'>
            <Header />
            <NavBar />
            <Timer deadline="December, 26, 2022" />
            <MenuInfo />
        </div>
    )
}

export default Menu;