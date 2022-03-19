import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../components/Todo/types";

interface TodosSliceState {
  todos: TodoType[];
}

const initialState: TodosSliceState = {
  todos: [] as TodoType[],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false,
        },
      ];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
