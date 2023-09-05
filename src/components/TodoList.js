import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import { useRecoilState, useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { todoListFilterAtom } from "../todo";
import { filteredTodoListState } from "../filteredTodoListState";

// UI
function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterAtom);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  // ブラウザ上に表示
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <select value={filter} onChange={handleChange}>
        <option value="すべて">すべて</option>
        <option value="完了">完了</option>
        <option value="未完了">未完了</option>
      </select>
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}
// optionタグvalue属性 http://html5.cyberlab.info/elements/forms/option-value.html

export default TodoList;

/**
 * atom
 * 共有したい状態の定義を行う
 * Recoilを利用する上でatomでの定義は必須
 * atomでは初期値を設定し必ずアプリケーション内のatom と selectorの中で一意となるkeyを設定する必要がある
 * atomは複数設定することができる
 * それらの個々のatomは独立した状態を持ち、それぞれを複数のコンポーネントで共有することができる
 */

/**
 * Hooks
 * 値のみ取得: useRecoilValue
 * setter関数のみ利用: useSetRecoilState
 * 両方利用: useRecoilState
 */

/**
 * Selecor
 * Todoのリストに登録されているTodoの数を取得する(このチュートリアル)
 * selectorはatomと同様にkeyプロパティで一意の名前をつける必要がある
 * atomとは異なり、初期値の設定は行わない
 * defaultの代わりにgetプロパティとsetプロパティを設定することができる
 * getプロパティのget関数はselectorの中のみで利用することができ、atomやselectorにアクセスすることができる
 * setプロパティを利用してatomの値を更新することもできる
 */

/**
 * mapで要素を展開して表示するコーディングの変更
 * <div key={item.id}></div>
 * <TodoItem key={item.id} item={item} />
 */
