import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selector";

function TodoListStats() {
  // useRecoilValue = 更新できない(読み込み専用)
  const { totalNum, totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState); // selectorで設定した状態を取得
  // console.log(totalNum);

  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
      <li>完了の数:{totalCompletedNum}</li>
      <li>未完了の数:{totalUncompletedNum}</li>
    </ul>
  );
}

export default TodoListStats;
