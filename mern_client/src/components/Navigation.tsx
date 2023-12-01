import React, { useCallback } from "react";
import ShadowBox from "./common/ShadowBox";
import Button from "./common/Button";
import Span from "./common/Span";
import Divider from "./common/Divider";
import Block from "./common/Block";
import { GoPlus } from "react-icons/go";
import { useAtom, useSetAtom } from "jotai";
import { selectAtom } from "../atoms/search";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import Input from "./common/Input";
import useInput from "../hooks/useInput";
import { infosAtom } from "../atoms/info";
import { infos } from "../data/infors";

interface NavigationProps {
  type?: "home" | "upload";
}

function Navigation({ type = "home" }) {
  const [select, setSelect] = useAtom(selectAtom);
  const { value, onChange } = useInput("");
  const setInfos = useSetAtom(infosAtom);

  const onChangeSelect = useCallback(() => {
    setSelect(!select);
  }, [select, setSelect]);

  const onSubmit = useCallback(() => {
    setInfos(infos);
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
