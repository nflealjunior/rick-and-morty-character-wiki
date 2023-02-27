import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  LocationCharacters from "../../components/location-characters";
import GoBackButton from "../../components/goBackButton";
import './location.scss';

function Location() {
  const location = useParams();
  const [singleLocationData, setSingleLocationData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location/" + location.id).then((response) => {
      response.json().then((data) => {
        if (!response.ok) {
          navigate("/locations");
        }
        setSingleLocationData(data);
      });
    });
  }, [location.id]);

  return (
    <div className="location">
      <GoBackButton />
      {singleLocationData && 
        <div className="location-data"> 
          <div className="location-data-row row">
            <div className="location-information col-lg-9">
              <p className="location-name">{singleLocationData.name}</p>
              <p>Type: {singleLocationData.type}</p>
              <p>Dimension: {singleLocationData.dimension}</p>
            </div>
          </div>
          <div className="location-characters-section row">
              <div className="location-character-section-title">Residents of '{singleLocationData.name}':</div>
              {singleLocationData.residents && singleLocationData.residents.map(function (resident) {
                const residentId = resident.split("/")[5];
                return (
                  <div key={"resident-" + residentId} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <LocationCharacters id={residentId} />
                  </div>
                )
              })}
          </div>
        </div>
      }
    </div>
  );
}

export default Location;