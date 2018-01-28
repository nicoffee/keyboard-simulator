import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => (
  <div className="start-container">
    <button className="start-button">
      <Link to="/training">Старт</Link>
    </button>
  </div>
);

export default StartPage;
