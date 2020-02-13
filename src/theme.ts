import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F25D50"
    },
    secondary: {
      main: "#D8D8C2"
    },
    error: {
      main: "#DD0000"
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: "#F25D50"
      }
    },
    MuiFormControl: {
      
      root: {
        margin: "30px 0"
      }
    },
    MuiInput: {      
      root: {
        "&$error input": { color: "#DD0000" }
      },
      input: {
        color: "#F25D50"
      },
      underline: {
        "&:after": {
          color: "#F25D50"
        }
      }
    },
    MuiFormHelperText: {
      root: {
        color: "#DD0000"
      }
    }
  }
});
