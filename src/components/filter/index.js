import React from 'react';
import './filter.scss';

function Filter() {

  return (
    <div className="filter-component">
      <div className="filter-options row">
        <div className="filter-item col-lg-2">
          <label className="filter-label" for="character-name">Name</label>
          <br />
          <input placeholder="Type a name..." className="filter-input" type="text" name="character-name" id="character-name"></input>
        </div>
        <div className="filter-item col-lg-2">
          <label className="filter-label"  for="character-species">Species</label>
          <br />
          <input placeholder="Type a specie..." className="filter-input" type="text" name="character-species" id="character-species"></input>
        </div>
        <div className="filter-item col-lg-2">
          <label className="filter-label"  for="character-status">Status</label>
          <br />
          <input placeholder="Type a status..." className="filter-input" type="text" name="character-status" id="character-status"></input>
        </div>
        <div className="filter-item col-lg-2">
          <label className="filter-label"  for="character-gender">Gender</label>
          <br />
          <input placeholder="Type a gender..." className="filter-input" type="text" name="character-gender" id="character-gender"></input>
        </div>
        <div className="filter-item col-lg-2">
          <button className="filter-button">FILTER</button>
        </div>
        <div className="filter-item col-lg-2">
          <button className="clear-button">CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;