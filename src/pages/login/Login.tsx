import LoginForm from "../../components/loginForm/index";
import React from "react";
import { PCard } from "./style";
import { Grid } from "@material-ui/core";

const Login: React.FC = () => {
  return (
    <Grid container>
      <PCard>
        <LoginForm />
      </PCard>
    </Grid>
  );
};

export default Login;
