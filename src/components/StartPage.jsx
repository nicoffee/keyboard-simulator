import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/components/start-page.css'; // eslint-disable-line no-unused-vars

const StartPage = () => (
  <div className="start-container">
    <button className="start-button">
      <Link to="/training">Старт</Link>
    </button>
  </div>
);

export default StartPage;
