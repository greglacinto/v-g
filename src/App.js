import './App.css';
// import Banner from './components/banner';
import EventInfo from './components/eventInfo';
import Footer from './components/footer';
import Header from './components/header';
import NavBar from './components/navbar';
import Banner from './components/banner';
import { Timer } from './components/timer';
import { useEffect, useState } from 'react';
import MenuInfo from './components/menuinfo';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [clickedValue, setClickedValue] = useState("home");
  const [isComponentSet, setIsComponentSet] = useState(false);
  
  const setComponentLoad = async () => {
    await wait (5000);
    setIsComponentSet(true);
  } 
  useEffect(() => {
    setIsComponentSet(false)
    setComponentLoad();
  },[clickedValue])

  return (
    <div className="App">
      <div className='w-80'>
        <Header />
        <NavBar setClickedValue={setClickedValue}/>
        <Timer deadline="December, 26, 2023" />
        
        { clickedValue === "home" 
        ? <Banner />
        : <MenuInfo /> }

        {isComponentSet ? <EventInfo /> : null}
      </div>

       {isComponentSet ? <Footer /> : null }

    </div>
  );
}

export default App;
