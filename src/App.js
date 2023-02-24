import React, { useEffect, useState } from "react";
import CharactersList from './components/characters-list'
import Header from './components/header';
import Filter from './components/filter';
import NoResults from "./components/no-results";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { Pagination } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function App() {
  const [characterData, setCharacterData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  function handlePage (e) {
    setCurrentPage(Number.parseInt(e.target.innerHTML.split('<')[0]));
  }

  function handleFilters () {
    setCurrentPage(1);
    setNameFilter(document.getElementById('character-name').value);
    setStatusFilter(document.getElementById('character-status').value);
    setSpeciesFilter(document.getElementById('character-species').value);
    setGenderFilter(document.getElementById('character-gender').value);
  }

  function clearAllFilters () {
    console.log("ENTROU NO CLEAR");
    var name = document.getElementById('character-name');
    name.value = "";
    var status = document.getElementById('character-status');
    status.value = "";
    var specie = document.getElementById('character-species');
    specie.value = "";
    var gender = document.getElementById('character-gender');
    gender.value = "";
    setNameFilter("");
    setStatusFilter("");
    setSpeciesFilter("");
    setGenderFilter("");
  }

  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/" +
      "?page=" + currentPage +
      "&name=" + nameFilter +
      "&status=" + statusFilter +
      "&species=" + speciesFilter + 
      "&gender=" + genderFilter
    ).then((response) => {
      response.json().then((data) => {
        setCharacterData(data);
      });
    });
  }, [ currentPage, nameFilter, statusFilter, speciesFilter, genderFilter ]);
  
  return (
    <div className="rick-and-morty-character-wiki">
      <div className="content container">
        <Header/>
        <Filter handleFilters={handleFilters} clearAllFilters={clearAllFilters}/>
        {characterData && characterData.results ? (
          <>
            <CharactersList characters={characterData} />
            <Pagination 
              className="container pagination" 
              count={characterData.info.pages} 
              size="large"
              color="primary"
              hidePrevButton 
              hideNextButton
              siblingCount={2} 
              boundaryCount={1}
              page={currentPage}
              onChange={handlePage}
            />
          </>
        ) : (
          <>
            <NoResults clearAllFilters={clearAllFilters}/>
            <Pagination 
              className="container pagination" 
              count={1} 
              size="large"
              color="primary"
              hidePrevButton 
              hideNextButton
              siblingCount={2} 
              boundaryCount={1}
              page={1}
              disabled
            />
          </>
        )}
        
      </div>
    </div> 
  );
}
