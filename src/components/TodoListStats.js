import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selector";

function TodoListStats() {
  // useRecoilValue = 更新できない(読み込み専用)
  const totalNum = useRecoilValue(todoListStatsState); // selectorで設定した状態を取得
  // console.log(totalNum);

  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
    </ul>
  );
}

export default TodoListStats;
