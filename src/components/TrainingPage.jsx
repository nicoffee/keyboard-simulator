import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class TrainingPage extends Component {
  static propTypes = {
    updateResults: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    status: PropTypes.string
  };

  constructor() {
    super();

    const lettersArray = this.generateRandomLettersArray(1072, 1103, 5);
    const TIMER = 60;

    this.state = {
      allTime: TIMER,
      remainingTime: TIMER,
      symbolPosition: 0,
      symbolsCount: lettersArray.length,
      errorsCount: 0,
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
    this.props.updateResults({
      errorsCount: 0,
      status: null,
      remainingTime: null
    });

    this.timerId = setInterval(
      () =>
        this.setState({
          remainingTime: this.state.remainingTime - 1,
          spentTime: this.state.spentTime + 1
        }),
      1000
    );

    document.body.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  componentDidUpdate() {
    if (this.props.status === 'positive') {
      this.props.history.push('/results');
    } else if (this.props.status === 'negative') {
      setTimeout(() => this.props.history.push('/results'), 500);
    } else if (this.state.remainingTime <= 0) {
      clearInterval(this.timerId);
      this.props.updateResults({
        status: 'negative',
        remainingTime: 0,
        errorsCount: this.state.errorsCount
      });
    } else if (this.state.symbolPosition === this.state.symbolsCount) {
      this.props.updateResults({
        status: 'positive',
        remainingTime: this.state.remainingTime,
        errorsCount: this.state.errorsCount
      });
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
        symbolPosition: this.state.symbolPosition + 1
      });
    } else {
      const newArr = lettersArray;
      newArr[symbolPosition].status = 'error';
      this.setState({
        errorsCount: this.state.errorsCount + 1,
        lettersArray: newArr
      });
    }
  }

  render() {
    return (
      <div>
        <div>Осталось времени: {this.formatTime(this.state.remainingTime)}</div>
        <div>
          Прошло времени:
          {this.formatTime(this.state.allTime - this.state.remainingTime)}
        </div>
        <div>Кол-во ошибок: {this.state.errorsCount}</div>
        <div>Осталось символов: {this.state.symbolsCount}</div>
        <div className="letters-container">
          {this.state.lettersArray.map((letter, index) => (
            <div className={letter.status} key={index}>
              {letter.symbol}
            </div>
          ))}
        </div>
        <button
          className="stop-button"
          onClick={() => {
            this.props.updateResults({
              status: 'unfinished',
              remainingTime: this.state.remainingTime
            });
            setTimeout(() => this.props.history.push('/results'), 500);
          }}>
          Закончить
        </button>
      </div>
    );
  }
}

export default withRouter(TrainingPage);
