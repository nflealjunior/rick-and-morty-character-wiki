import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      {singleCharacterData && 
        <div className="character-data"> 
          {console.log(singleCharacterData)}
          <div className="character-data-row row">
            <div className={"character-image-col " + "character-" + singleCharacterData.status.toLowerCase() + " col-lg-3"}>
              <div className="character-status-tag">
                {singleCharacterData.status.toUpperCase()}
              </div>
              <img className="character-image" alt="character" src={singleCharacterData.image} />
            </div>
            <div className=" character-information col-lg-9">
              <p className="character-name">{singleCharacterData.name}</p>
              <p>Specie: {singleCharacterData.species}</p>
              <p>Gender: {singleCharacterData.gender}</p>
              {singleCharacterData.type && 
                <p>
                  Type: {singleCharacterData.type}
                </p>
              }
              {(singleCharacterData.origin.name !== "unknown") && 
                <p>
                  <a href={singleCharacterData.origin.url}>Origin: {singleCharacterData.origin.name}</a>
                </p>
              }
              {(singleCharacterData.location.name !== "unknown") && 
                <p>
                  <a href={singleCharacterData.location.url}>Last known location: {singleCharacterData.location.name}</a>
                </p>
              }
            </div>
          </div>
          <div className="character-episodes-section row">
              <div className="episodes-section-title">Episodes {singleCharacterData.name} appeared:</div>
              {singleCharacterData.episode && singleCharacterData.episode.map(function (episode) {
                const episodeNumber = episode.split("/")[5];
                return (
                  <div key={"episode-" + episodeNumber} className="col-lg-4">
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