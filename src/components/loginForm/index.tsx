import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TextField,
  FormControl,
  Button} from "@material-ui/core";

const LoginForm: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 500,
    },
  });
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Paper square className={classes.root}>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="icon label tabs example"
    >
      <Tab label="RECENTS">
      <FormControl>
      <TextField
       label="Email"/>
       <TextField
       label="Senha"/>
       <Button
       type="submit"
       variant="outlined"
       color="primary">Login</Button>
    </FormControl>
      </Tab>
      <Tab label="FAVORITES" />
      <Tab label="NEARBY" />
    </Tabs>
    </Paper>


  );
};

export default LoginForm;
