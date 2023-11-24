import React from "react";
import Navigation from "../../components/Navigation";
import MapContainer from "../../components/MapContainer";
import { infosAtom } from "../../atoms/info";
import { useSetAtom } from "jotai";
import { infos } from "../../data/infors";
import MarkersContainer from "../../components/MarkersContainer";

function Home() {
  const setInfos = useSetAtom(infosAtom);

  if (infos) {
    setInfos(infos);
  }

  return (
    <div>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </div>
  );
}

export default Home;
