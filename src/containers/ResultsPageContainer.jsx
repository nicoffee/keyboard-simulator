import { connect } from 'react-redux';
import ResultsPage from './../components/ResultsPage';

const mapStateToProps = state => ({
  errorsCount: state.errorsCount,
  status: state.status,
  remainingTime: state.remainingTime
});

export default connect(mapStateToProps)(ResultsPage);
