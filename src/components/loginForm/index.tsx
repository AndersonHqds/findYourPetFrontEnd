import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { LoginFormControl, ActionsButtons } from "./style";
import PasswordInput from "../passwordInput/index";
import { validate } from "email-validator";

const LoginForm: React.FC = props => {
  const [formState, updateFormState] = useState({
    email: {
      value: "",
      error: false
    },
    password: {
      value: "",
      error: false
    }
  });

  const updateValuesFormState = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(LoginFormControl);
    updateFormState({
      ...formState,
      [name]: { value, error: false }
    });
  };

  const validateFields = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputEmail = formState.email.value;
    const inputPassword = formState.password.value;
    const isValidEmail = validate(inputEmail);

    if (!isValidEmail || inputEmail.trim() === "") {
      updateFormState({
        ...formState,
        email: { value: inputEmail, error: true }
      });
      console.log(formState.email.error);
      return;
    }

    if (inputPassword.trim() === "") {
      updateFormState({
        ...formState,
        password: { value: inputPassword, error: true }
      });
      return;
    }
    alert(`Email: ${inputEmail}\nSenha: ${inputPassword}`);
  };

  return (
    <>
      <LoginFormControl onSubmit={validateFields}>
        <TextField
          variant="outlined"
          label="E-mail"
          value={formState.email.value}
          onChange={updateValuesFormState}
          name="email"
          error={formState.email.error}
          helperText={formState.email.error && "Email inválido"}
        />
        <PasswordInput
          inputName="password"
          changePassword={updateValuesFormState}
          propsValue={formState.password.value}
          showHelper={formState.password.error}
        />
        <ActionsButtons>
          <Button type="submit" color="primary">
            Cadastrar
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            Login
          </Button>
        </ActionsButtons>
      </LoginFormControl>
    </>
  );
};

export default LoginForm;
