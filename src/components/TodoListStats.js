import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selector";

function TodoListStats() {
  const totalNum = useRecoilValue(todoListStatsState); // selectorで設定した状態を取得
  console.log(totalNum);

  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
    </ul>
  );
}

export default TodoListStats;
