/* eslint-disable import/no-extraneous-dependencies, global-require */
import React from "react";
import ReactDOM from "react-dom";

import getMountableComponent from "./components/getMountableComponent";

export default function render(app, node) {
  const MountableComponent = getMountableComponent(app);
  return ReactDOM.render(<MountableComponent />, node);
}
