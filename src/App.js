import React, {useEffect,useState} from "react";
import Characters from './components/characters'
import Header from './components/header';
import Filter from './components/filter';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { Pagination } from '@mui/material';

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

  function clearAllFilters (){
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
  }, [currentPage]);
  
  return (
    <div className="rick-and-morty-character-wiki">
        {characterData &&
          <div className="content container">
            <Header/>
            <Filter />
            <Characters characters={characterData} />
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
          </div>
        }
    </div> 
  );
}
