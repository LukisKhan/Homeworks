import React, { Component } from 'react'

class BenchIndexItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const bench = this.props.bench;
        return (
            <li lat={bench.lat} lng={bench.lng}>{bench.description}</li>
        )
    }
}

export default BenchIndexItem;