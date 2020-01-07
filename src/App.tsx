import React from "react";
import Login from './pages/Login'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
         <Login/>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
