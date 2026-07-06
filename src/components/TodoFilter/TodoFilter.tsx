import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/todoSlice";
import type { AppDispatch, RootState } from "../../store/store";

function TodoFilter() {
  const dispatch = useDispatch<AppDispatch>();

  const filter = useSelector(
    (state: RootState) => state.todo.filter
  );

  return (
    <div className="flex justify-center gap-4 mb-6">

      <button
        onClick={() => dispatch(setFilter("all"))}
        className={`px-4 py-2 rounded-lg ${
          filter === "all"
            ? "bg-orange-400 text-white"
            : "bg-gray-200"
        }`}
      >
        Tất cả
      </button>

      <button
        onClick={() => dispatch(setFilter("active"))}
        className={`px-4 py-2 rounded-lg ${
          filter === "active"
            ? "bg-orange-400 text-white"
            : "bg-gray-200"
        }`}
      >
        Chưa Hoàn Thành
      </button>

      <button
        onClick={() => dispatch(setFilter("completed"))}
        className={`px-4 py-2 rounded-lg ${
          filter === "completed"
            ? "bg-orange-400 text-white"
            : "bg-gray-200"
        }`}
      >
        Hoàn Thành
      </button>
    </div>
  );
}

export default TodoFilter;