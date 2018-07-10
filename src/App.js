import "tachyons";
import "styling/semantic.less";

import React from "react";
import { Button, Icon } from "semantic-ui-react";
import ArundoTheme from "./ArundoTheme";
import Form from "./Form";

const App = () => (
  <div>
    <ArundoTheme />
    <Form />
  </div>
);

export default App;
