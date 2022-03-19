import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./slices";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

/**
 * Selectors
 */

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
