import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const BenchSearch = ({ benches, fetchBenches, updateBounds }) => (
  <div class="bench-search">
    <BenchMap benches={benches} updateBounds={updateBounds} />
    <BenchIndex benches={benches} fetchBenches={fetchBenches} />
  </div>
);

export default BenchSearch;
