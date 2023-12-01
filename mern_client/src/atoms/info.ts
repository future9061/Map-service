import { atom } from "jotai";
import { Info } from "../types/info";

//위치 데이터 전역으로 쓰기 위해
export const infosAtom = atom<Info[] | null>(null);
//선택한 마커의 데이터 가져와서 저장
export const selectInfoAtom = atom<Info | null>(null);
