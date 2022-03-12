import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import "./effects.css";

const FormWithCustomHooks = () => {
  const [form, handleInputChange] = useForm({
    email: "",
    name: "",
    password: "",
  });
  const { name, email, password } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <>
      <h1 className="text-lg font-bold p-5 text-center">FormWithCustomHooks</h1>
      <hr className="" />

      <form className="p-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="shadow font-bold  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            className="shadow font-bold  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            placeholder="example@mail.com"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            className="shadow font-bold  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            placeholder="******"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default FormWithCustomHooks;
