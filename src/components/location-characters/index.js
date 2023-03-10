import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './location-characters.scss';

function LocationCharacters(props) {
  const [locationCharacterData, setLocationCharacterData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + props.id).then((response) => {
      response.json().then((residentData) => {
        setLocationCharacterData(residentData);
      });
    });
  }, [props.id]);

  return (
    locationCharacterData && (
      <Link 
        className="location-resident" 
        to={`/character/${locationCharacterData.id}`} 
        key={locationCharacterData.id} 
      >
        <div key={locationCharacterData.id} className="resident">
          <div className={"location-resident-image resident-" + locationCharacterData.status.toLowerCase()}>
            <div className="resident-status-tag">{locationCharacterData.status.toUpperCase()}</div>
            <img className="resident-image" alt="resident" src={locationCharacterData.image} />
          </div>
          <div className="location-resident-name">
            {locationCharacterData.name}
          </div>
          <p className="more-info">Click to see more information &#8599;</p>
        </div>
      </Link>
    )
  );
}

export default LocationCharacters;