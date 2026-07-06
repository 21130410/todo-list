import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";
import type { Filter, Todo } from "../Types/todo.type";

interface TodoState {
    todos: Todo[];
    filter: Filter;
}

const initialState: TodoState = {
    todos: [],
    filter: "all",
};

const todoSlice = createSlice({
    name: "todo",

    initialState,

    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todos.push({
                id: Date.now().toString(),
                title: action.payload,
                completed: false,
            });
        },

        deleteTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        toggleTodo(state, action: PayloadAction<string>) {
            const todo = state.todos.find(
                (todo) => todo.id === action.payload
            );

            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        updateTodo(state, action: PayloadAction<Todo>) {
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id
            );

            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        },

        setFilter(state, action: PayloadAction<Filter>) {
            state.filter = action.payload;
        },
    },
});

export const {
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;