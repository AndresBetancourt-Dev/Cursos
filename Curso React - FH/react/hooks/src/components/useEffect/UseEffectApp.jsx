import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";

const UseEffectApp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const { name, email } = form;

  useEffect(() => {
    console.log("Me disparo una vez");
    return () => {
      console.log("Clean-up");
    };
  }, []);

  useEffect(() => {
    console.log("No importa que cambie vuelvete a Ejecutar");
  });

  useEffect(() => {
    console.log("Cambió el form");
  }, [form]);

  useEffect(() => {
    console.log("Cambió el name");
  }, [name]);

  useEffect(() => {
    console.log("Cambió el email");
  }, [email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <h1 className="text-lg font-bold p-5 text-center">UseEffectApp</h1>
      <hr className="" />

      <form className="p-5 ">
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
      </form>
      {name ? <Message value={name} /> : null}
    </>
  );
};

export default UseEffectApp;
