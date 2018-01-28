import { connect } from 'react-redux';
import TrainingPage from './../components/TrainingPage';
import { updateErrorsCount, updateResultStatus } from './../actions';

const mapStateToProps = state => {
  return { errorsCount: state.errorsCount, status: state.status };
};

export default connect(mapStateToProps, {
  updateErrorsCount,
  updateResultStatus
})(TrainingPage);
