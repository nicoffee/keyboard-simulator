import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/components/start-page.css'; // eslint-disable-line no-unused-vars

const StartPage = () => (
  <div className="start-container">
    <Link to="/training">
      <button className="start-button">Старт</button>
    </Link>
  </div>
);

export default StartPage;
