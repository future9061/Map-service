import React from "react";
import Navigation from "../../components/Navigation";
import MapContainer from "../../components/MapContainer";
import MarkersContainer from "../../components/MarkersContainer";

function Upload() {
  return (
    <>
      <Navigation type="upload" />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default Upload;
