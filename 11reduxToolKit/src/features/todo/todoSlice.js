//! Step 2
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Item 1",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      //? Push ur todo in state
      state.todos.push(todo);
    },
    updateTodoList: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//? Will be helpful in components, as becoz only by the use of them we will be able to manipulate our store
export const { addTodo, updateTodoList, removeTodo } = todoSlice.actions;

//? Required by store to mange its data
export default todoSlice.reducer;
