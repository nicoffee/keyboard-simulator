import { connect } from 'react-redux';
import TrainingPage from './../components/TrainingPage';
import { updateResults, resetResults } from './../actions';

const mapStateToProps = state => {
  return {
    errorsCount: state.errorsCount,
    status: state.status,
    remainingTime: state.remainingTime
  };
};

export default connect(mapStateToProps, {
  updateResults,
  resetResults
})(TrainingPage);
