import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TrainingPage extends Component {
  constructor() {
    super();

    const lettersArray = this.generateRandomLettersArray(1072, 1103, 2);

    this.state = {
      allTime: 5,
      remainingTime: 5,
      symbolPosition: 0,
      symbolsCount: lettersArray.length,
      lettersArray
    };
  }

  generateRandomLettersArray = (firstCharCode, lastCharCode, length) => {
    let randomLettersArray = [];

    for (let i = 0; i < length; i++) {
      const charCode =
        Math.floor(Math.random() * (lastCharCode - firstCharCode)) +
        firstCharCode;
      randomLettersArray.push({
        charCode,
        symbol: String.fromCharCode(charCode),
        status: null
      });
    }

    return randomLettersArray;
  };

  formatTime = s => {
    const minuts = Math.floor(s / 60);
    const seconds = s - minuts * 60;
    return `${minuts}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  componentDidMount() {
    this.timerId = setInterval(
      () =>
        this.setState({
          remainingTime: --this.state.remainingTime,
          spentTime: ++this.state.spentTime
        }),
      1000
    );

    document.body.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  componentDidUpdate() {
    if (this.state.remainingTime <= 0) {
      clearInterval(this.timerId);

      this.props.updateResultStatus('negative');
      setTimeout(() => this.props.history.push('/results'), 500);
    } else if (this.state.symbolPosition === this.state.symbolsCount) {
      this.props.updateResultStatus('positive');
      setTimeout(() => this.props.history.push('/results'), 500);
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('keypress', this.onKeyPress.bind(this));
  }

  onKeyPress(e) {
    const { lettersArray, symbolPosition } = this.state;

    if (lettersArray.length - 1 < symbolPosition) {
      return;
    }

    if (lettersArray[symbolPosition].charCode === e.charCode) {
      const newArr = lettersArray;
      newArr[symbolPosition].status = 'done';

      this.setState({
        lettersArray: newArr,
        symbolPosition: ++this.state.symbolPosition
      });
    } else {
      const newArr = lettersArray;
      newArr[symbolPosition].status = 'error';
      this.setState({
        lettersArray: newArr
      });

      this.props.updateErrorsCount(this.props.errorsCount);
    }
  }

  render() {
    return (
      <div>
        <div>Осталось времени: {this.formatTime(this.state.remainingTime)}</div>
        <div>
          Прошло времени:{' '}
          {this.formatTime(this.state.allTime - this.state.remainingTime)}
        </div>
        <div>Кол-во ошибок: {this.props.errorsCount}</div>
        <div>Осталось символов: {this.state.symbolsCount}</div>
        <div className="letters-container">
          {this.state.lettersArray.map((letter, index) => (
            <div className={letter.status} key={index}>
              {letter.symbol}
            </div>
          ))}
        </div>
        <button className="stop-button">
          <Link to="/results">Закончить</Link>
        </button>
      </div>
    );
  }
}

export default withRouter(TrainingPage);
