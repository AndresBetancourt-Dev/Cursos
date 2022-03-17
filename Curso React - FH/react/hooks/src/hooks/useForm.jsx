import React, { useState } from "react";

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, handleInputChange];
};

export default useForm;
