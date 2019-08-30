import React, { Component } from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    // request benches from your API here
    this.props.fetchBenches();
  }
  render() {
    let benchList = "";
    if(Object.keys(this.props.benches).length > 0){
      // debugger;
        benchList = Object.values(this.props.benches).map( bench => (
            <BenchIndexItem bench={bench} key={bench.id}/>
            ));
    }
    else
        benchList = <h1>I will be the benchlist</h1>;

    return (
      <ul>
        {benchList}
      </ul>
    )
  }
}
export default BenchIndex;

