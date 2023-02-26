import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  LocationCharacters from "../../components/location-characters";
import './episode.scss';

function Episode() {
  const episode = useParams();
  const [singleEpisodeData, setSingleEpisodeData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + episode.id).then((response) => {
      response.json().then((data) => {
        setSingleEpisodeData(data);
      });
    });
  }, [episode.id]);

  return (
    <div className="episode">
      {singleEpisodeData && 
        <div className="episode-data"> 
          {console.log(singleEpisodeData)}
          <div className="episode-data-row row">
            <div className="episode-information col-lg-9">
              <p className="episode-name">{singleEpisodeData.episode + ": " + singleEpisodeData.name}</p>
              <p>Air date: {singleEpisodeData.air_date}</p>
            </div>
          </div>
          <div className="episode-characters-section row">
              <div className="episode-character-section-title">
                Characters in {singleEpisodeData.episode + " " + singleEpisodeData.name}:</div>
              {singleEpisodeData.characters && singleEpisodeData.characters.map(function (character) {
                const characterId = character.split("/")[5];
                return (
                  <div key={"character-" + characterId} className="col-lg-3">
                    <LocationCharacters id={characterId} />
                  </div>
                )
              })}
          </div>
        </div>
      }
    </div>
  );
}

export default Episode;