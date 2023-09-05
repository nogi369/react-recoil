import { atom } from "recoil";

// atom
export const todoListAtom = atom({
  // 初期値の設定
  key: "todoListAtom",
  default: [
    {
      id: 0,
      title: "メール送信",
      isComplete: false,
    },
  ],
});
