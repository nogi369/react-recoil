import { selector } from "recoil";
import { todoListAtom } from "./atom";

// selector
export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListAtom);
    const totalNum = todoList.length;
    return totalNum;
  },
});
