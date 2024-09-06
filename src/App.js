
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Poster from './Components/Poster';
import Catagory from './Components/Catagory';
import Demonstration from './Components/Demonstration';
import Rent from './Components/Rent';
import Membership from './Components/Membership';
import Cleanliness from './Components/Cleanliness';
import Freatures from './Components/Freatures';
import Review from './Components/Review';
import Contect from './Components/Contect';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Banner></Banner>
    <Navbar></Navbar>
    <Poster></Poster>
    <Catagory></Catagory>
    <Demonstration></Demonstration>
    <Rent></Rent>
    <Membership></Membership>
    <Cleanliness></Cleanliness>
    <div style={{width:"99%",border:"1px solid #00000014"}}>

    </div>
    <Freatures></Freatures>
    <Review></Review>
    <div style={{width:"99%",border:"1px solid #00000014"}}></div>
    <Contect></Contect>
    <Footer></Footer>
    </div>
  );
}

export default App;
