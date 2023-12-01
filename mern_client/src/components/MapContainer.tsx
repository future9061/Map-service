import React from "react";
import Map from "./common/Map/index";
import { useSetAtom } from "jotai";
import { mapAtom } from "../atoms/map";
import { selectInfoAtom } from "../atoms/info";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);
  const initMap = (map: naver.maps.Map) => {
    setMap(map);
    naver.maps.Event.addListener(map, "click", () => {
      setSelectInfo(null);
    });
  };

  return <Map width="100vw" height="100vh" initMap={initMap} />;
}

export default MapContainer;
