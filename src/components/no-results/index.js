import React from 'react';
import './no-results.scss';
import NoResultsImage from '../../assets/images/no-results-morty.png';

function NoResults(props) {

  return (
    <div className="no-results-component">
      <div className="image-row row">
        <img className="no-results-image" alt="no-results" src={NoResultsImage} />
      </div>
      <div className="row">
        <p className="message">Oh no, there are no results here!</p>
      </div>
      {props.showBackButton && (
        <div className="go-back-button-row row">
          <button onClick={() => { props.clearAllFilters() }} className="go-back-button">&#8592; TAKE ME BACK!</button>
        </div>
      )}
    </div>
  );
}

export default NoResults;