import '../styles/menuinfo.css';
import weddingMenu from "../assets/weddingmenu3.png";

function MenuInfo() {
    return (
        <div className="menu-container">
            <img id='menu-img' src={weddingMenu} alt='wedding menu'/>
        </div>
    )
}

export default MenuInfo;