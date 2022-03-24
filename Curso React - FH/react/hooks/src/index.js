import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import UseStateApp from "./components/useState/UseStateApp";
import CounterWithCustomHook from "./components/useState/CounterWithCustomHook";
import UseEffectApp from "./components/useEffect/UseEffectApp";
import FormWithCustomHooks from "./components/useEffect/FormWithCustomHooks";
import MultipleCustomHooks from "./components/useFetch/MultipleCustomHooks";
import FocusScreen from "./components/useRef/FocusScreen";
import RealExampleRef from "./components/useRef/RealExampleRef";
import LayoutEffect from "./components/useLayoutEffect/LayoutEffect";
import Memorize from "./components/memo/Memorize";
import MemoHook from "./components/useMemo/MemoHook";
import CallbackHook from "./components/memo/CallbackHook";
import { Padre } from "./components/task/Padre";
ReactDOM.render(<Padre />, document.getElementById("root"));
