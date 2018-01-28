import React from 'react';
import { Link } from 'react-router-dom';
import backLogo from './../img/001-left-arrow.svg';
import repeatLogo from './../img/002-redo.svg';
import styles from './../styles/components/results-page.css';

const ResultsPage = ({ errorsCount, status }) => (
  <div>
    <Link className="link" to="/">
      <img src={backLogo} alt="" />На стартовую
    </Link>
    <Link className="link" to="/training">
      <img src={repeatLogo} alt="" />Пройти тренировку еще раз
    </Link>
    <h1>Результаты:</h1>
    <h2 className={status === 'positive' ? 'postitive' : 'negative'}>
      {status === 'positive' ? 'Успех' : 'Неудача'}
    </h2>
    <p>Ошибок: {errorsCount}</p>
  </div>
);

export default ResultsPage;
