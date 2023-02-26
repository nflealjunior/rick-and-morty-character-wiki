import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GoBackButton from "../../components/goBackButton";
import  CharacterEpisodes from "../../components/character-episode";
import './character.scss';

function Character() {
  const character = useParams();
  const [singleCharacterData, setSingleCharacterData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + character.id).then((response) => {
      response.json().then((data) => {
        setSingleCharacterData(data);
      });
    });
  }, [character.id]);

  return (
    <div className="character">
      <GoBackButton />
      {singleCharacterData && 
        <div className="character-data"> 
          <div className="character-data-row row">
            <div className={"character-image-col character-" + singleCharacterData.status.toLowerCase() + " col-md-3 col-lg-3"}>
              <div className="character-status-tag">
                {singleCharacterData.status.toUpperCase()}
              </div>
              <img className="character-image" alt="character" src={singleCharacterData.image} />
            </div>
            <div className=" character-information col-md-9 col-lg-9">
              <p className="character-name">{singleCharacterData.name}</p>
              <p>Specie: {singleCharacterData.species}</p>
              <p>Gender: {singleCharacterData.gender}</p>
              {singleCharacterData.type && 
                <p>
                  Type: {singleCharacterData.type}
                </p>
              }
              {(singleCharacterData.origin.name !== "unknown") && 
                <Link to={`/location/${Number.parseInt(singleCharacterData.origin.url.split('/')[5])}`}>
                  <p className="location-link">
                    Origin: {singleCharacterData.origin.name} &#8599;
                  </p>
                </Link>
              }
              {(singleCharacterData.location.name !== "unknown") && 
                <Link to={`/location/${Number.parseInt(singleCharacterData.location.url.split('/')[5])}`}>
                  <p className="location-link">
                    Last known location: {singleCharacterData.location.name} &#8599;
                  </p>
                </Link>
              }
            </div>
          </div>
          <div className="character-episodes-section row">
              <div className="episodes-section-title">Episodes '{singleCharacterData.name}' appeared:</div>
              {singleCharacterData.episode && singleCharacterData.episode.map(function (episode) {
                const episodeNumber = episode.split("/")[5];
                return (
                  <div key={"episode-" + episodeNumber} className="col-md-6 col-lg-4">
                    <CharacterEpisodes episode={episodeNumber} />
                  </div>
                )
              })}
          </div>
        </div>
      }
    </div>
  );
}

export default Character;