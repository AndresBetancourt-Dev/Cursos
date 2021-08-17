import ReactDOM from "react-dom";
// import App from "./App";
import { CounterApp } from "./CounterApp";
import "./index.css";

// const greet = <h1>Hello World</h1>;
const root = document.querySelector("#root");

ReactDOM.render(
  //   <App
  //     info={"Need to learn Springboot, ASAP"}
  //     react={{ title: "Currently working with proptypes" }}
  //     java={true}
  //     redux={{ title: { reduxTitle: "Will learn Redux ASAP" } }}
  //   />,
  <CounterApp value={165} />,
  root
);
