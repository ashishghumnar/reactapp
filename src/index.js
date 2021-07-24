import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

async function main() {
  if(process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    await worker.start();
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement
  );
}

main();
