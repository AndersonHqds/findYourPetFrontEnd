import React from "react";
import Login from "./pages/login/Login";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import Registrar from "./pages/registrar";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/registrar" component={Registrar} />
              </Switch>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
