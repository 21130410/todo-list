import { useState } from "react";
import { useDispatch } from "react-redux";

import type { Todo } from "../../Types/todo.type";
import type { AppDispatch } from "../../store/store";

import { deleteTodo,toggleTodo,updateTodo,} from "../../store/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(todo.title);

  const handleSave = () => {
    if (!title.trim()) return;

    dispatch(
      updateTodo({
        ...todo,
        title,
      })
    );

    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(todo.title);

    setIsEditing(false);
  };

  return (
    <div className="bg-pink-100 rounded-xl p-4 flex justify-between items-center">

      <div className="flex items-center gap-3 flex-1">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />

        {isEditing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-2 py-1 flex-1"
          />
        ) : (
          <span
            className={`flex-1 ${
              todo.completed
                ? "line-through text-gray-400"
                : ""
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex gap-2">

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
        >
          Xóa
        </button>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
          >
            Sửa
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
            >
              Lưu
            </button>

            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-lg"
            >
              Hủy
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default TodoItem;