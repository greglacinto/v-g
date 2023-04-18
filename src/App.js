import './App.css';
// import Banner from './components/banner';
import EventInfo from './components/eventInfo';
import Footer from './components/footer';
import Header from './components/header';
import NavBar from './components/navbar';
import Banner from './components/banner';
import { Timer } from './components/timer';
import { useState } from 'react';
import MenuInfo from './components/menuinfo';


function App() {
  const [clickedValue, setClickedValue] = useState("home");

  console.log(clickedValue);

  return (
    <div className="App">
      <div className='w-80'>
        <Header />
        <NavBar setClickedValue={setClickedValue}/>
        <Timer deadline="December, 26, 2023" />
        
        { clickedValue === "home" 
        ? <Banner />
        : <MenuInfo /> }
        <EventInfo />
      </div>

       <Footer />

    </div>
  );
}

export default App;
