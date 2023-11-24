import { atom } from "jotai";
import { info } from "../types/info";

//위치 데이터 전역으로 쓰기 위해
export const infosAtom = atom<info[] | null>(null);
//선택한 마커의 데이터 가져와서 저장
export const selectInfoAtom = atom<info | null>(null);
