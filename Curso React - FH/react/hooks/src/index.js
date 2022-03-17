import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import UseStateApp from "./components/useState/UseStateApp";
import CounterWithCustomHook from "./components/useState/CounterWithCustomHook";
import UseEffectApp from "./components/useEffect/UseEffectApp";
import FormWithCustomHooks from "./components/useEffect/FormWithCustomHooks";
import MultipleCustomHooks from "./components/useFetch/MultipleCustomHooks";
ReactDOM.render(<MultipleCustomHooks />, document.getElementById("root"));
