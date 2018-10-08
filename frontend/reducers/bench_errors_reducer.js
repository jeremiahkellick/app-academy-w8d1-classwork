import {
  RECEIVE_BENCH_ERRORS,
  RECEIVE_BENCHES,
  RECEIVE_BENCH
} from '../actions/bench_actions';

const benchErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BENCH_ERRORS:
      return action.errors;
    case RECEIVE_BENCHES:
      return [];
    case RECEIVE_BENCH:
      return [];
    default:
      return state;
  }
};

export default benchErrorsReducer;
