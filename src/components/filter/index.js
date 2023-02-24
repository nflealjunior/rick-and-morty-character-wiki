import React, { useEffect } from 'react';
import './filter.scss';

function Filter(props) {

  useEffect(() => {
    document.getElementById('character-name').onkeypress = function(e) {
      if(e.key === 'Enter') {
        props.handleFilters()
      }
    }
    document.getElementById('character-species').onkeypress = function(e) {
      if(e.key === 'Enter') {
        props.handleFilters()
      }
    }
    document.getElementById('character-status').onkeypress = function(e) {
      if(e.key === 'Enter') {
        props.handleFilters()
      }
    }
    document.getElementById('character-gender').onkeypress = function(e) {
      if(e.key === 'Enter') {
        props.handleFilters()
      }
    }
  }, [props]);

  return (
    <div className="filter-component">
      <div className="filter-options row">
        <div className="filter-item col-lg-2">
          <label className="filter-label">Name</label>
          <br />
          <input placeholder="Type a name..." className="filter-input" type="text" name="character-name" id="character-name"></input>
        </div>
        <div className="filter-item col-lg-2">
          <label className="filter-label">Species</label>
          <br />
          <input placeholder="Type the specie..." className="filter-input" type="text" name="character-species" id="character-species"></input>
        </div>
        <div className="filter-item col-lg-2">
          <label className="filter-label">Status</label>
          <br />
          <select className="filter-select" name="character-status" id="character-status">
            <option value="" defaultValue>All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="filter-item col-lg-2">
          <label className="filter-label">Gender</label>
          <br />
          <select className="filter-select" name="character-gender" id="character-gender">
            <option value="" defaultValue>All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="filter-item col-lg-2">
          <button onClick={() => { props.handleFilters() }} className="filter-button">FILTER</button>
        </div>
        <div className="filter-item col-lg-2">
          <button onClick={() => { props.clearAllFilters() }} className="clear-button">CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;