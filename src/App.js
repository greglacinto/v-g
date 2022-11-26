import './App.css';
// import Banner from './components/banner';
import EventInfo from './components/eventInfo';
import Footer from './components/footer';
import Header from './components/header';
import NavBar from './components/navbar';
import Banner2 from './components/banner2';


function App() {
  return (
    <div className="App">
      <div className='w-80'>
        <Header />
        <NavBar />
        {/* <Banner /> */}
        <Banner2 />
        <EventInfo />
      </div>

       <Footer />

    </div>
  );
}

export default App;
