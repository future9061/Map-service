import React, { useCallback, useState } from "react";
import ShadowBox from "./common/ShadowBox";
import Button from "./common/Button";
import Span from "./common/Span";
import Divider from "./common/Divider";
import Block from "./common/Block";
import { GoPlus } from "react-icons/go";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { selectAtom } from "../atoms/search";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import Input from "./common/Input";
import useInput from "../hooks/useInput";
import { infosAtom, selectInfoAtom } from "../atoms/info";
import { useQuery } from "react-query";
import { searchKeyword } from "../apis/search";
import { mapAtom } from "../atoms/map";

function Navigation({ type = "home" }) {
  const [select, setSelect] = useAtom(selectAtom);
  const { value, onChange } = useInput("");
  const setInfos = useSetAtom(infosAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);
  const map = useAtomValue(mapAtom);

  const [keyword, setKeyword] = useState("");

  const { status } = useQuery(
    ["search", keyword],
    () => searchKeyword(keyword),
    {
      enabled: !!keyword,
      select: (result) => result.data.data,
      onSuccess: (infos) => {
        setInfos(infos);
        setSelectInfo(null);

        if (!map) return;
        const bounds = new naver.maps.LatLngBounds(
          new naver.maps.LatLng(0, 0),
          new naver.maps.LatLng(0, 0)
        );

        infos.forEach((info) => {
          bounds.extend(info.position);
        });
        map.panToBounds(bounds);
      },
    }
  );

  const onChangeSelect = useCallback(() => {
    setSelect(!select);
  }, [select, setSelect]);

  const onSubmit = useCallback(() => {
    setKeyword(value);
  }, [value]);

  return (
    <ShadowBox>
      {type === "upload" && select ? (
        <Button onClick={onChangeSelect}>
          <FaArrowLeft size={"20px"} />
        </Button>
      ) : (
        <Button type="link" url="/">
          <Span size="title">Map</Span>
        </Button>
      )}

      <Divider />
      {select ? (
        <Input value={value} onChange={onChange} onSubmit={onSubmit} />
      ) : (
        <Block
          height="28px"
          onClick={type === "upload" ? onChangeSelect : undefined}
        />
      )}

      {type === "upload" ? (
        <Button onClick={select ? onSubmit : onChangeSelect}>
          <FaSearch size={"20px"} />
        </Button>
      ) : (
        <Button type="link" url="upload">
          <GoPlus size={"20px"} />
        </Button>
      )}
    </ShadowBox>
  );
}

export default Navigation;
