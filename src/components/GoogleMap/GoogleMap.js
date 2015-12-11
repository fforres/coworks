import React, {Component, PropTypes} from 'react';
import GMap from 'google-map-react';
import MyMarker from './Marker.js';

class GoogleMap extends Component {
  static propTypes = {
    center: PropTypes.object,
    zoom: PropTypes.number
  }
  static defaultProps = {
    center: {
      lat: 59.938043,
      lng: 30.337157
    },
    zoom: 9,
    greatPlaceCoords: {
      lat: 59.724465,
      lng: 30.080121
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GMap
        defaultCenter = {this.props.center}
        defaultZoom = {this.props.zoom}>
        <MyMarker lat={59.955413} lng={30.337844} text={'A'} />
      </GMap>
    );
  }
}

export default GoogleMap;
