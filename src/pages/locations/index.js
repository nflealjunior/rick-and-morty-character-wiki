import React, { useEffect, useState} from 'react';
import LocationsList from "../../components/locations-list";
import NoResults from "../../components/no-results";
import GoBackButton from "../../components/goBackButton";
import { Pagination } from "@mui/material";
import './locations.scss';

function Locations() {
  const [locationsData, setLocationsData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  function handleLocationsPage (e) {
    setCurrentPage(Number.parseInt(e.target.innerHTML.split('<')[0]));
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location/" + 
      "?page=" + currentPage
    ).then((response) => {
      response.json().then((data) => {
        setLocationsData(data);
      });
    });
  }, [ currentPage ]);

  return (
    <div className="locations">
      <GoBackButton />
      {locationsData && locationsData.results ? (
        <>
          <LocationsList locations={locationsData} />
          <Pagination 
            className="pagination" 
            count={locationsData.info.pages} 
            size="large"
            color="primary"
            hidePrevButton 
            hideNextButton
            siblingCount={1} 
            boundaryCount={1}
            page={currentPage}
            onChange={handleLocationsPage}
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

export default Locations;