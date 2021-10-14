import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const CardMap = (props) => {
  const containerStyle = {
    width: "250px",
    height: "250px",
  };

  const center = {
    lat: props.location.latitude,
    lng: props.location.longitude,
  };

  const position = {
    lat: props.location.latitude,
    lng: props.location.longitude,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
        <Marker position={position} />
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default CardMap;
