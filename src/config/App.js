import React, { useEffect } from "react";

import Routes from "./Routes";
import "../styles/styles.css";
import { light, dark } from "./theme";

const App = () => {
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    if (theme === "dark") {
      Object.keys(dark).forEach((key) => {
        document.body.style.setProperty(`--${key}`, dark[key]);
      });
    } else {
      Object.keys(light).forEach((key) => {
        document.body.style.setProperty(`--${key}`, light[key]);
      });
    }
  }, [theme]);

  return <Routes />;
};

export default App;
