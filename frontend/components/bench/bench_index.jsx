import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  render() {
    const benches = this.props.benches;
    return (
      <ul>
        {
          benches.map(bench => <BenchIndexItem key={bench.id} bench={bench} />)
        }
      </ul>
    );
  }
}

export default BenchIndex;
