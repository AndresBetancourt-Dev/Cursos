import { actions } from "./actions";

export const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actions.ADD:
      return [...state, payload.todo];
    case actions.DELETE:
      return state.filter((todo) => todo.id !== payload.id);
    case actions.TOGGLE:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export const addTodo = (description = "") => ({
  type: actions.ADD,
  payload: {
    todo: {
      id: new Date().getTime(),
      description,
      done: false,
    },
  },
});

export const deleteTodo = (id) => ({
  type: actions.DELETE,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: actions.TOGGLE,
  payload: {
    id,
  },
});
