import React, { Component } from 'react'

class MarkerManager extends Component {
    constructor(map) {
        super();
        this.map = map;
        this.markers = {};
    }
    
    updateMarkers(benches) {
        console.log("time to update");
        Object.values(benches).map(bench => {
            if(!this.markers[bench.id]) {
                this.markers[bench.id] = bench;
            }
        });
        Object.values(this.markers).map(bench => this.createMarkersFromBench(bench));
  }

    createMarkersFromBench(bench){
      var myLatlng = new google.maps.LatLng(bench.lat, bench.lng);
      var marker = new google.maps.Marker({
          position: myLatlng,
          title: bench.description
      });
      marker.setMap(this.map);
  }
}

export default MarkerManager;
