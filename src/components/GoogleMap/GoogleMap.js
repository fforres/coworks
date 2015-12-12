import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Resizable from 'react-component-resizable';
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

  componentDidMount(){
    var a = ReactDOM;
    ReactDOM.findDOMNode(this).minHeight = "200px";
    ReactDOM.findDOMNode(this).minWidth = "100%";
  }
  onResize() {
    debugger;
    this._googleMapRef._setViewSize();
    if (this.state.maps && this.state.map)
    {
     let center =  this.state.map.getCenter();
     this.state.maps.event.trigger(this.state.map, 'resize');
     this.state.map.setCenter(center);
    }
  }

  render() {
    return (
      <Resizable
        className="via transferPropsTo"
        onResize={this.onResize}>
      </Resizable>
    );
  }
}

export default GoogleMap;
