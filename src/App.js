import React, { useState } from "react";
import ThemeIcon from "./components/ThemeIcon";
import "./App.css";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  };

  return (
    <div className="app-container">
      <ThemeIcon onToggle={toggleMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
