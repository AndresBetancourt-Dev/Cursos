import PropTypes from "prop-types";
import React from "react";

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li
      onClick={() => handleToggle(todo.id)}
      className={`flex flex-row w-full p-5 justify-between items-center shadow-md ${
        todo.done ? "bg-green-500" : "bg-red-600"
      } cursor-pointer`}
      key={todo.id}
    >
      <p>{`${index + 1} ${todo.description}`}</p>

      <button className="btn btn-red" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TodoListItem;
