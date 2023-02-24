import React from 'react';
import './characters.scss';

function Characters(props) {
  return (
    <div className="characters-component">
      {props.characters && console.log(props.characters.results)}
      <div className="character-row row">
        {props.characters && props.characters.results.map(function (character) {
          return (
            <div className="character-col col-xs-6 col-sm-4 col-lg-3">
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
                </div>
                <div hidden className={'status-bar status-bar-' + character.status.toLowerCase()}>
                  {character.status.toUpperCase()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Characters;