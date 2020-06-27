import React from "react";
import { Tab } from "semantic-ui-react";

import "./style.css";
import Login from "./Login";
import Register from "./Register";

const IndexMenu = () => {
  const panes = [
    {
      menuItem: "Sign In",
      render: () => <Login />,
    },
    {
      menuItem: "Register",
      render: () => <Register />,
    },
  ];

  return (
    <div className="custom-form">
      <Tab
        menu={{ secondary: true, pointing: true, widths: 2 }}
        panes={panes}
      />
    </div>
  );
};

export default IndexMenu;
