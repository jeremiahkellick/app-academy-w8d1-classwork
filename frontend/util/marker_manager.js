class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    const benchesById = {};
    benches.forEach(bench => (benchesById[bench.id] = bench));
    for (let id in this.markers) {
      if (this.markers.hasOwnProperty(id) && benchesById[id] === undefined) {
        this.markers[id].setMap(null);
        delete this.markers[id];
      }
    }
    benches.forEach(bench => {
      if (this.markers[bench.id] === undefined) {
        this.markers[bench.id] = new google.maps.Marker({
          position: { lat: bench.lat, lng: bench.lng },
          title: bench.description,
          map: this.map
        });
      }
    });
  }
}

export default MarkerManager;
