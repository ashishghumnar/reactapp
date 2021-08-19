import { StrictMode } from "react";


import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import store from './store';

import App from "./App";

async function main() {
  if(process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    await worker.start();
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
    rootElement
  );
}

main();
