import React from 'react';
import { Link } from 'react-router-dom';
import './episodes-list.scss';

function EpisodesList(props) {
  return (
    <div className="episodes-component">
      <div className="episodes-row row">
        {props.episodes && props.episodes.results.map(function (episode) {
          return (
            <Link to={`/episode/${episode.id}`} key={episode.id} className="episode-col col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="episode">
                <div className="name-tag">
                  {episode.episode.toUpperCase() + ": " + episode.name.toUpperCase()}
                </div>
                <div className="information">
                  <p>Air date: {episode.air_date}</p>
                  <p className="more-info">Click to see more information &#8599;</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default EpisodesList;