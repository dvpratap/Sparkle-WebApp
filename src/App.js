import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Billing from "./components/Billing";
import Refund from "./components/Refund";
import Rental from "./components/Rental";
import Repair from "./components/Repair";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Details";
import './components/Parent.css';


const App = () => {
return (
  <Router className='div-parent'>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/billing" element={<Billing/>} />
      <Route path="/refund" element={<Refund/>} />
      <Route path="/rental" element={<Rental/>} />
      <Route path="/repair" element={<Repair/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/details" element={<Details/>}/>
      </Routes>
  </Router>
);
};

export default App;
