import React from "react";
import PropTypes from "prop-types";
import useForm from "../../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.trim()) {
      handleAddTodo(description)
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={description}
        onChange={handleInputChange}
        type="text"
        name="description"
        id="description"
      />
      <button
        type="submit"
        className="btn border-t-neutral-800 bg-stone-600 text-yellow-500"
      >
        Add
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default TodoAdd;
