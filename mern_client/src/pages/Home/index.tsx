import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import MapContainer from "../../components/MapContainer";
import { infosAtom } from "../../atoms/info";
import { useSetAtom } from "jotai";

import MarkersContainer from "../../components/MarkersContainer";
import { useQuery } from "react-query";
import { getInfos } from "../../apis/info";

function Home() {
  const setInfos = useSetAtom(infosAtom);

  const { status } = useQuery("infos", getInfos, {
    select: (result) => result.data.data,
    onSuccess: (infos) => {
      setInfos(infos);
    },
  });

  if (status === "loading") return <></>;

  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default Home;
