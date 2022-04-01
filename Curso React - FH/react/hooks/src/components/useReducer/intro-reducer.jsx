const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload.todo];
    }
  }
  return state;
};

let todos = todosReducer();

/**
 * Bad practice mutates de state directly
 * todos.push({
  id: 2,
  todo: "Comprar fruta",
  done: false,
    });
 */

const newTodo = {
  id: 2,
  todo: "Comprar fruta",
  done: false,
};

const addTodoAction = (todo) => ({
  type: "ADD",
  payload: {
    todo,
  },
});

console.log(todos);

console.log(todosReducer(todos, addTodoAction(newTodo)));
console.log(todos);
