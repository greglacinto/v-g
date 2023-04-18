import './App.css';
// import Banner from './components/banner';
import EventInfo from './components/eventInfo';
import Footer from './components/footer';
import Header from './components/header';
import NavBar from './components/navbar';
import Banner from './components/banner';
import { Timer } from './components/timer';


function App() {
  return (
    <div className="App">
      <div className='w-80'>
        <Header />
        <NavBar />
        <Timer deadline="December, 26, 2023" />
        <Banner />
        <EventInfo />
      </div>

       <Footer />

    </div>
  );
}

export default App;
