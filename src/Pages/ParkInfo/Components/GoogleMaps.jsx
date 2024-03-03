import React from "react";
import "./GoogleMaps.css";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

function GoogleMap(props) {
    const position = {lat: Number(props.latNum), lng: Number(props.longNum)};
  
    return (
        <APIProvider apiKey={'AIzaSyBggF__mwcBQbdUt8YeUxnhI81R4-au5cE'}>
            <div className="google-map-container">
                <Map defaultCenter={position} defaultZoom={12}>
                    <Marker position={position} />
                </Map>
            </div>
        </APIProvider>
    );
  }

export default GoogleMap