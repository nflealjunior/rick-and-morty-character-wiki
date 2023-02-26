import React from 'react';
import { useNavigate } from 'react-router-dom';
import './go-back-button.scss';

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <div className="go-back-button">
      <div className="row">
        <div className="go-backbutton-section">
          <button onClick={() => navigate(-1)}>&#8592; Go back</button>
        </div>
      </div>
    </div>
  );
}

export default GoBackButton;