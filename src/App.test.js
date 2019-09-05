import React from "react";
import ReactDOM from "react-dom";
import Abhishek from "./Abhishek";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Abhishek />, div);
  ReactDOM.unmountComponentAtNode(div);
});
