import { useState } from "react";

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const reset = () => {
    setForm(initialState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, handleInputChange, reset];
};

export default useForm;
