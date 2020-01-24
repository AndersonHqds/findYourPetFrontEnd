import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  FormControl,
  InputAdornment,
  IconButton,
  InputLabel
} from "@material-ui/core";
import React, { useState } from "react";
import FormHelperText from "@material-ui/core/FormHelperText";

const PasswordInput = ({
  changePassword,
  inputName,
  propsValue,
  showHelper
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        onChange={evt => changePassword(evt)}
        name={inputName}
        value={propsValue}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="Visualizar senha"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
      {showHelper && <FormHelperText>Senha inválida</FormHelperText>}
    </FormControl>
  );
};
export default PasswordInput;
