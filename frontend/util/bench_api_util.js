export const ajaxFetchBenches = (filters = {}) => (
  $.ajax({ url: `/api/benches?${$.param(filters)}` })
);

export const ajaxCreateBench = bench => (
  $.ajax({ method: 'POST', url: '/api/benches', data: { bench } })
);
