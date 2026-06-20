import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("rr-theme") || "dark"
  );

  const toggle = () =>
    setTheme(t => {
      const next = t === "dark" ? "light" : "dark";
      localStorage.setItem("rr-theme", next);
      return next;
    });

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
