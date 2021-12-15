import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { IntlProvider } from "react-intl";
import Swahili from "./languages/es-SW.json";
import English from "./languages/en-US.json";
import French from "./languages/ef-FR.json";

const locale = navigator.language;
let language;

//check which language the user's browser is set to and render the language down to
//    the provider appropriately
switch (locale) {
  case "sw":
    language = Swahili;
    break;
  case "fr":
    language = French;
    break;
  default:
    language = English;
    break;
}

ReactDOM.render(
  <IntlProvider locale={locale} messages={language}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls during development
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//remove log messages in production
if (process.env.NODE_ENV === "production") {
  console.log("production mode");
}
