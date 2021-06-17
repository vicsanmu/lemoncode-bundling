import React from "react";
const logo = require("./content/logo_2.png");

export const HelloComponent: React.FC = () => {
  return (
    <div>
      <img src={logo}/>
      <h2>Hello World {process.env.ENVIRONMENT}</h2>      
    </div>
  );
};