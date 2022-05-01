import React, { useEffect, useReducer } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import "./styles.css";
import { addTodo, deleteTodo, todoReducer, toggleTodo } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (description) => {
    dispatch(addTodo(description));
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  }

  return (
    <div>
      <h1>Todos Quantity : {todos.length}</h1>
      <hr />
      <div className="space-y-5 min-h-[10em]">
        <TodoAdd handleAddTodo={handleAddTodo}/>
        <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
      </div>
    </div>
  );
};

export default TodoApp;
