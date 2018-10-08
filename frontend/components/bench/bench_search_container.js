import BenchSearch from './bench_search';
import { actionFetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  benches: Object.values(state.entities.benches)
});

const mapDispatchToProps = {
  fetchBenches: actionFetchBenches,
  updateBounds
};

export default connect(mapStateToProps, mapDispatchToProps)(BenchSearch);
