import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [
    {
      id: window.crypto.randomUUID(),
      title: "title",
      description: "description",
      isCompleted: false,
    },
  ],
};

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.toDos.push({ ...action.payload, id: window.crypto.randomUUID() });
    },
    deleteTodo: (state, action) => {
      state.toDos = state.toDos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.toDos = state.toDos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...action.payload,
              isCompleted: !todo.isCompleted,
              updateAt: new Date().getTime(),
            }
          : todo
      );
    },
    markCompleted: (state, action) => {
      state.toDos = state.toDos.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
              updateAt: new Date().getTime(),
            }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
