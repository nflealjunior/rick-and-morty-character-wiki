import React from "react";
import Header from './components/header';
import Home from "./pages/home";
import Characters from "./pages/characters";
import Locations from "./pages/locations";
import Episodes from "./pages/episodes";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <div className="rick-and-morty-character-wiki">
      <div className="content container">
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/characters" element={<Characters />}></Route>
            <Route path="/locations" element={<Locations />}></Route>
            <Route path="/episodes" element={<Episodes />}></Route>
          </Routes>
        </Router>
      </div>
    </div> 
  );
}
