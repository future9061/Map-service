import React from "react";
import { useEffect } from "react";

interface MapProps {
  width: string;
  height: string;
}

function Map({ width, height }: MapProps) {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    const map = new naver.maps.Map("map", mapOptions);
  }, []);

  return <div id="map" style={{ width, height }}></div>;
}

export default Map;
