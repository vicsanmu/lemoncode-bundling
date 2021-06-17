import React from "react";
const logo = require("./content/logo_2.png");
const classes = require("./mystyles.scss");

export const HelloComponent: React.FC = () => {
  return (
    <div>
      <img src={logo} className={classes.logo}/>
      <h2 className={classes.hello}>Hello World {process.env.ENVIRONMENT}</h2>      
    </div>
  );
};