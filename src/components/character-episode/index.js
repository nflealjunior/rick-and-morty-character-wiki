import React, { useEffect, useState} from 'react';
import './character-episode.scss';

function CharacterEpisodes(props) {
  const [characterEpisodeData, setCharacterEpisodeData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + props.episode).then((response) => {
      response.json().then((episodeData) => {
        setCharacterEpisodeData(episodeData);
        console.log(episodeData);
      });
    });
  }, []);

  return (
    characterEpisodeData && (
      <a className="character-episode" href={characterEpisodeData.url}>
        <div key={characterEpisodeData.id} className="episode">
          <div className="character-episode-title">
            {characterEpisodeData.episode + ": " + characterEpisodeData.name}
          </div>
          <div className="character-episode-air-date">
            {characterEpisodeData.air_date}
          </div>
        </div>
      </a>
    )
  );
}

export default CharacterEpisodes;