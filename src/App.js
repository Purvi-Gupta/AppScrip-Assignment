import './App.css';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import SecondSection from './components/SecondSection';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <SecondSection/>
     <Section3/>
     <img src='/images/imagesbanner.png' style={{width:"100%"}} />
     <Section4/>
     <Section5/>
     <Footer/>
    </>
  );
}

export default App;
