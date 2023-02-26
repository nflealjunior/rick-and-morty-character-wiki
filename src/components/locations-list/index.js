import React from 'react';
import { Link } from 'react-router-dom';
import './locations-list.scss';

function LocationsList(props) {
  return (
    <div className="locations-component">
      <div className="locations-row row">
        {props.locations && props.locations.results.map(function (location) {
          return (
            <Link to={`/location/${location.id}`} key={location.id} className="location-col col-xs-6 col-sm-4 col-lg-3">
              <div className="location">
                <div className="name-tag">
                  {location.name.toUpperCase()}
                </div>
                <div className="information">
                  <p>Type: {location.type}</p>
                  <p>Dimension: {location.dimension}</p>
                </div>
                <p className="more-info">
                  Click to see more information &#8599;
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default LocationsList;