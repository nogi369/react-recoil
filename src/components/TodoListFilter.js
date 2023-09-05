import { todoListFilterAtom } from "../todo";
import { useRecoilState } from "recoil";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterAtom);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <select value={filter} onChange={handleChange}>
        <option value="すべて">すべて</option>
        <option value="完了">完了</option>
        <option value="未完了">未完了</option>
      </select>
    </>
  );
}

export default TodoListFilters;
