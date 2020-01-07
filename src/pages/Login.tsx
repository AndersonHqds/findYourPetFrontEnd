import LoginForm from "../components/loginForm";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from "react";
import {UseStyle} from './style';
import { Grid } from "@material-ui/core";


const Login: React.FC = () => {
  const classes = UseStyle();
  return (
    <Grid container>
        <Card className={classes.card}>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    </Grid>        
  );
};

export default Login;
