import React, { useEffect } from "react";
import Navigation from "../../components/Navigation";
import MapContainer from "../../components/MapContainer";
import MarkersContainer from "../../components/MarkersContainer";
import { useAtom, useSetAtom } from "jotai";
import { infosAtom, selectInfoAtom } from "../../atoms/info";
import SearchBoard from "../../components/SearchBoard";

function Upload() {
  const setInfos = useSetAtom(infosAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  useEffect(() => {
    setInfos(null);
    setSelectInfo(null);
  }, []);

  return (
    <>
      <Navigation type="upload" />
      <MapContainer />
      <MarkersContainer type="upload" />
      <SearchBoard />
    </>
  );
}

export default Upload;
