import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

function Home() {

  return (
    <div className="home">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/characters'}> Characters</Link></li>
        <li><Link to={'/locations'}>Locations</Link></li>
        <li><Link to={'/episodes'}>Episodes</Link></li>
      </ul>
    </div>
  );
}

export default Home;