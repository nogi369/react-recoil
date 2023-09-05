import { atom } from "recoil";

export const todoListFilterAtom = atom({
  key: "todoListFilterAtom",
  default: "すべて",
});
