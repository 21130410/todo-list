import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const { todos, filter } = useSelector(
    (state: RootState) => state.todo
  );

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;

      case "completed":
        return todo.completed;

      default:
        return true;
    }
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center text-gray-400 py-6">
        Chưa có công việc
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;