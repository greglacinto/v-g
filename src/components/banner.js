//dependency for our carousel -- npm i 3d-react-carousal
import {Carousel} from '3d-react-carousal';

import '../styles/banner2.css';

import slides from '../images';

function Banner2() {

    return (
        <div 
          id='carousel-container'
        >
            <Carousel slides={slides} autoplay={true} interval={4000} arrows={false}/>
        </div>
    );
}

export default Banner2;