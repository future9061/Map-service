import React from "react";
import Map from "./common/Map/index";
import { useSetAtom } from "jotai";
import { mapAtom } from "../atoms/map";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(map);
    naver.maps.Event.addListener(map, "click", () => {
      console.log("맵 클릭!");
    });
  };

  return <Map width="100vw" height="100vh" initMap={initMap} />;
}

export default MapContainer;
