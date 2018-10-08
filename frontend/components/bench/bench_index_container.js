import BenchIndex from './bench_index';
import { actionFetchBenches } from '../../actions/bench_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  benches: Object.values(state.entities.benches)
});

const mapDispatchToProps = { fetchBenches: actionFetchBenches };

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
