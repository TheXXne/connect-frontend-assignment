import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const assetsAtom = atom({
  key: 'assetsAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const pageCountAtom = atom({
  key: 'pageCountAtom',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const fetchingAtom = atom({
  key: 'fetchingAtom',
  default: false,
});

export const keywordAtom = atom({
  key: 'keywordAtom',
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const checkedOptionAtom = atom({
  key: 'checkedOptionAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});