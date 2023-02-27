import React from 'react';
import { useNavigate } from 'react-router-dom';
import './not-found.scss';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="row">
        <div className="page-not-found-404">
          404
        </div>
        <div className="page-not-found">
          Page not found
        </div>
        <div className="image">
          <img src=""/>
        </div>
        <div className="go-back-button">
          <button onClick={() => navigate(-1)}>&#8592; Take me back!</button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;