import { atom } from "recoil";

export const assetsAtom = atom({
  key: 'assetsAtom',
  default: [],
});

export const pageCountAtom = atom({
  key: 'pageCountAtom',
  default: 1,
});

export const fetchingAtom = atom({
  key: 'fetchingAtom',
  default: false,
});

export const keywordAtom = atom({
  key: 'keywordAtom',
  default: "",
});

export const checkedOptionAtom = atom({
  key: 'checkedOptionAtom',
  default: [],
});