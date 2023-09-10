
import './App.css';
import "./input.css";
import {Routes,Route} from "react-router-dom";
import LandingPage from "./page/LandingPage";
import DetailPage from "./page/DetailsPage";
import NavBar from './components/Navbar';

function App() {
  return (
    <div className='h-14 bg-gradient-to-r from-blue-500 to-red-500 h-screen'>
      <NavBar />
      <Routes>
        <Route path ="/" element = {<LandingPage/>}> </Route>
        <Route path="/details" element ={<DetailPage/>}/> 
      </Routes>
    </div>
  );
}
export default App;
