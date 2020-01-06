import React from "react";
import RepositoryList from "./components/repository";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
         <RepositoryList />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
