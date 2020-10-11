import React from "react";

import "./style.css";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h3>
        <span className="four-oh-four">404</span>
        <br />
        <br />
        Couldn't find what you were looking for. Would you like to go back{" "}
        <a href="/home">home</a>?
      </h3>
    </div>
  );
};

export default NotFound;
