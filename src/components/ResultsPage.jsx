import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backLogo from './../img/001-left-arrow.svg';
import repeatLogo from './../img/002-redo.svg';
import styles from './../styles/components/results-page.css';

const ResultsPage = ({ errorsCount, remainingTime, status }) => (
  <div>
    <Link className="link" to="/">
      <img src={backLogo} alt="" />На стартовую
    </Link>
    <Link className="link" to="/training">
      <img src={repeatLogo} alt="" />Пройти тренировку еще раз
    </Link>
    <h2>Результаты:</h2>
    {status && (
      <h1
        className={
          status === 'positive'
            ? 'postitive'
            : status === 'unfinished' ? 'unfinished' : 'negative'
        }>
        {status === 'positive'
          ? 'Успех'
          : status === 'unfinished' ? 'Не завершено' : 'Неудача'}
      </h1>
    )}
    {remainingTime && <p>Оставшееся время (сек): {remainingTime}</p>}
    <p>Ошибок: {errorsCount}</p>
  </div>
);

ResultsPage.propTypes = {
  errorsCount: PropTypes.number,
  remainingTime: PropTypes.number,
  status: PropTypes.string
};

export default ResultsPage;
