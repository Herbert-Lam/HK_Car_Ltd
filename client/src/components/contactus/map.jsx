import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class Map extends Component {
  static defaultProps = {
    center: { lat: 49.20370034231716, lng: -122.9127438971218 },
    zoom: 15,
  };

  render() {
    return (
      <div id="google-map-div">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAQRKFu_39M6Z3mtTcn7_4Iom_j8NZDCr0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;