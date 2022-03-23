import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const initialFormState = {
  firstName: "",
  lastName: "",
};

const NewUserForm = ({ onSubmit }) => {
  const [state, setState] = useState(initialFormState);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...state,
    });
    setState(initialFormState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First name</Label>
        <Input
          required
          placeholder="First name"
          onChange={handleChange}
          value={state.firstName}
          name="firstName"
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          required
          placeholder="Last name"
          onChange={handleChange}
          value={state.lastName}
          name="lastName"
        />
      </FormGroup>
      <FormGroup>
        <Button block outline color="dark" type="submit">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUserForm;
