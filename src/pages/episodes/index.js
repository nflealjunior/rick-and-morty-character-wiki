import React, { useEffect, useState} from 'react';
import EpisodesList from "../../components/episodes-list";
import NoResults from "../../components/no-results";
import { Pagination } from "@mui/material";
import './episodes.scss';

function Episodes() {
  const [episodesData, setEpisodesData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  function handleEpisodesPage (e) {
    console.log(Number.parseInt(e.target.innerHTML.split('<')[0]));
    setCurrentPage(Number.parseInt(e.target.innerHTML.split('<')[0]));
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/?page=" + currentPage).then((response) => {
      response.json().then((data) => {
        setEpisodesData(data);
      });
    });
  }, [ currentPage ]);

  return (
    <div className="episodes">
      {episodesData && episodesData.results ? (
        <>
          <EpisodesList episodes={episodesData} />
          {episodesData && console.log(episodesData.info.pages)}
          <Pagination 
            className="pagination" 
            count={episodesData.info.pages} 
            size="large"
            color="primary"
            hidePrevButton 
            hideNextButton
            siblingCount={1} 
            boundaryCount={1}
            page={currentPage}
            onChange={handleEpisodesPage}
          />
        </>
      ) : (
        <>
          <NoResults />
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
  );
}

export default Episodes;