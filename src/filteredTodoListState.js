import { selector } from "recoil";
import { todoListAtom } from "./atom";
import { todoListFilterAtom } from "./todo";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterAtom);
    const list = get(todoListAtom);

    switch (filter) {
      case "完了":
        return list.filter((item) => item.isComplete);
      case "未完了":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
