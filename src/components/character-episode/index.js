import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './character-episode.scss';

function CharacterEpisodes(props) {
  const [characterEpisodeData, setCharacterEpisodeData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + props.episode).then((response) => {
      response.json().then((episodeData) => {
        setCharacterEpisodeData(episodeData);
      });
    });
  }, [props.episode]);

  return (
    characterEpisodeData && (
      <Link to={`/episode/${characterEpisodeData.id}`} className="character-episode" href={characterEpisodeData.url}>
        <div className="episode">
          <div className="character-episode-title">
            {characterEpisodeData.episode + ": " + characterEpisodeData.name}
          </div>
          <div className="more-info">
            Complete information &#8599;
          </div>
          <div className="character-episode-air-date">
            {characterEpisodeData.air_date}
          </div>
        </div>
      </Link>
    )
  );
}

export default CharacterEpisodes;