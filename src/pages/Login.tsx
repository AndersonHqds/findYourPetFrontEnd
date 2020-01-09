import LoginForm from "../components/loginForm";

import CardContent from '@material-ui/core/CardContent';
import React from "react";
import { PCard } from './style';
import { Grid } from "@material-ui/core";


const Login: React.FC = () => {  
  return (
    <Grid container>
        <PCard>
            <CardContent>
                <LoginForm />
            </CardContent>
        </PCard>
    </Grid>        
  );
};

export default Login;
