import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import type { AppDispatch } from "../../store/store";


function TodoForm() {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const handleAdd = () => {
        if (!title.trim()) return;

        dispatch(addTodo(title));

        setTitle("");
    };

    return (
        <div className="flex gap-3 py-2 py-2">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-full px-4 py-2 flex-1"
                placeholder="Tạo công việc cần làm"
            />
            

            <button
                onClick={handleAdd}
                className="bg-blue-600 text-white rounded-full px-5"
            >
                Thêm 
            </button>
        </div>
    );
}

export default TodoForm;