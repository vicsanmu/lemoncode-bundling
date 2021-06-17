import React from "react";
import ReactDOM from "react-dom";
import { HelloComponent } from "./hello";
require('dotenv').config();

ReactDOM.render(<HelloComponent />, document.getElementById("root"));