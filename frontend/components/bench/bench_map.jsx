import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(
      this.mapNode,
      { center: { lat: 37.791426, lng: -122.407426 }, zoom: 14 }
    );
    this.updateBounds = this.updateBounds.bind(this);
    this.map.addListener('idle', this.updateBounds);
    this.markerManager = new MarkerManager(this.map);
    this.markerManager.updateMarkers(this.props.benches);
  }

  componentWillReceiveProps(newProps) {
    this.markerManager.updateMarkers(newProps.benches);
  }

  updateBounds() {
    const googleBounds = this.map.getBounds();
    const bounds = { northEast: {}, southWest: {} };
    bounds.northEast.lat = googleBounds.getNorthEast().lat();
    bounds.northEast.lng = googleBounds.getNorthEast().lng();
    bounds.southWest.lat = googleBounds.getSouthWest().lat();
    bounds.southWest.lng = googleBounds.getSouthWest().lng();
    this.props.updateBounds(bounds);
  }

  render () {
    return <div id="map-container" ref={map => (this.mapNode = map)}></div>;
  }
}

export default BenchMap;
