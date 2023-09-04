import { useRecoilState } from "recoil";
import { todoListAtom } from "../atom";

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const deleteItem = () => {
    // idどうしが一致する削除対象の配列の番号を取得する
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    // 配列を２つ繋げ、削除対象のindexを持つ要素のみ含めない
    const newTodoList = [
      // index = 配列の番号
      ...todoList.slice(0, index), // 0から削除対象のindexまで
      ...todoList.slice(index + 1), // 配列の番号+1からindexまで
    ];
    setTodoList(newTodoList);
  };

  return (
    <div>
      {item.title}
      <button onClick={deleteItem} style={{ cursor: "pointer" }}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
