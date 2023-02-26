import React from 'react';
import { Link } from 'react-router-dom';
import './characters-list.scss';

function CharactersList(props) {
  return (
    <div className="characters-component">
      <div className="character-row row">
        {props.characters && props.characters.results.map(function (character) {
          return (
            <Link to={`/character/${character.id}`} key={character.id} className="character-col col-xs-6 col-sm-4 col-lg-3">
              <div className={'character character-' + character.status.toLowerCase()}>
                <div className={'name-tag name-tag-' + character.status.toLowerCase()}>
                  {character.name.toUpperCase()}
                </div>
                <div className="image">
                  <div className={'status-tag status-tag-' + character.status.toLowerCase()}>
                    {character.status.toUpperCase()}
                  </div>
                  <img className="character-img" alt={character.name} src={character.image}/>
                </div>
                <div className="information">
                  <p>Species: {character.species}</p>
                  <p>Gender: {character.gender}</p>
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

export default CharactersList;