import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { PCard } from "./style";
import { Grid } from "@material-ui/core";
import CustomSelect from "../../components/customSelect";


const Register: React.FC = () => {
  const [formState, updateFormState] = useState({
    email: {
      value: "",
      error: false
    },
    password: {
      value: "",
      error: false
    },
    confirmPassword: {
      value: "",
      error: false
    },
    fullName: {
      value: "",
      error: false
    },
    profilePicture: {
      value: "",
      error: false
    },
    uf: {
      value: "",
      error: false
    },
    city: {
      value: "",
      error: false
    },
    address: {
      value: "",
      error: false
    },
    addressNumber: {
      value: "",
      error: false
    },
  });
  const [currentEstado, updateEstado] = useState({
    name: 'a',
    value: 'a'
  });
  const updateValuesFormState = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;    
    updateFormState({
      ...formState,
      [name]: { value, error: false }
    });
  };
  const test = [{
    value: 'a',
    name: 'a'
  },{
    value: 'b',
    name: 'b'
  }]
  const testFunc = () => {
    console.log('testando select');
  } 
  return(
  <>
  <Grid container>
    <PCard>
    <TextField
            variant="outlined"
            label="Nome completo"
            value={formState.fullName.value}
            onChange={updateValuesFormState}
            name="fullname"
            error={formState.fullName.error}
            helperText={formState.fullName.error && "O campo está vazio"}
          />

      <TextField
            variant="outlined"
            label="Foto de perfil"
            value={formState.profilePicture.value}
            onChange={updateValuesFormState}
            name="profilepicture"
            error={formState.profilePicture.error}
            helperText={formState.profilePicture.error && "..."}
          />

      <TextField
            variant="outlined"
            label="Senha"
            value={formState.password.value}
            onChange={updateValuesFormState}
            name="password"
            error={formState.password.error}
            helperText={formState.password.error && "O campo está vazio"}
          />

      <TextField
            variant="outlined"
            label="Confirme sua senha"
            value={formState.confirmPassword.value}
            onChange={updateValuesFormState}
            name="confirmPassword"
            error={formState.confirmPassword.error}
            helperText={formState.confirmPassword.error && "As senhas estão diferentes"}
          />

      <TextField
            variant="outlined"
            label="Estado"
            value={formState.uf.value}
            onChange={updateValuesFormState}
            name="uf"
            error={formState.uf.error}
            helperText={formState.uf.error && "UF não selecionado"}
          />
      <CustomSelect
        items={test}
        handleOnChange = {updateEstado}          
        currValue={currentEstado}
      />
      <TextField
            variant="outlined"
            label="Cidade"
            value={formState.city.value}
            onChange={updateValuesFormState}
            name="city"
            error={formState.city.error}
            helperText={formState.city.error && "O campo está vazio"}
          />

      <TextField
            variant="outlined"
            label="Numero"
            value={formState.addressNumber.value}
            onChange={updateValuesFormState}
            name="addressNumber"
            error={formState.addressNumber.error}
            helperText={formState.addressNumber.error && "O campo está vazio"}
          />
      </PCard>
  </Grid>;
  </>
  )
};

export default Register;
