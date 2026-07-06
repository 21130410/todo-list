import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";


function TodoFooter() {

    const todos = useSelector((state: RootState) => state.todo.todos);

    const total = todos.length;

    const active = todos.filter((t) => !t.completed).length;

    const completed = todos.filter((t) => t.completed).length;

    return (
        <p className="text-center mt-5">
            Total: {total} | Active: {active} | Completed: {completed}
        </p>
    );
}

export default TodoFooter;