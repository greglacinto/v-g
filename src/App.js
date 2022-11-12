import './App.css';
import Banner from './components/banner';
import EventInfo from './components/eventInfo';
import Footer from './components/footer';
import Header from './components/header';
import NavBar from './components/navbar';


function App() {
  return (
    <div className="App">
      <div className='w-80'>
        <Header />
        <NavBar />
        <Banner />
        <EventInfo />
      </div>

       <Footer />

    </div>
  );
}

export default App;
