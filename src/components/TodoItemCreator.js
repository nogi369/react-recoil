import { useSetRecoilState } from "recoil";
import { todoListAtom } from "../atom";
import { useState } from "react";

function TodoItemCreator() {
  const [title, setTitle] = useState("");
  // const [todoList, setTodoList] = useRecoilState(todoListAtom);
  // console.log(todoList);

  // atomで設定した状態を取得&更新
  const setTodoList = useSetRecoilState(todoListAtom);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    // 配列への追加処理
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: title,
        isComplete: false,
      },
    ]);
    setTitle("");
  };

  return (
    <div style={{ margin: "1em 0" }}>
      <input type="text" value={title} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;

// keyを一意に設定するための関数(mapで使うkey属性の設定)
let id = 1;
function getId() {
  return id++;
}
