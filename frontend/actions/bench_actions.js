import { ajaxFetchBenches, ajaxCreateBench } from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const RECEIVE_BENCH_ERRORS = 'RECEIVE_BENCH_ERRORS';

export const actionFetchBenches = filters => dispatch => (
  ajaxFetchBenches(filters)
    .then(benches => dispatch({ type: RECEIVE_BENCHES, benches }))
);

export const createBench = bench => dispatch => (
  ajaxCreateBench(bench).then(
    bench => dispatch({ type: RECEIVE_BENCH, bench }),
    errors => dispatch({ type: RECEIVE_BENCH_ERRORS, errors })
  )
);
