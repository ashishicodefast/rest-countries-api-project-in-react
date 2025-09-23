import React, { createContext, useState } from "react";

export const Theme = createContext("");

export function ThemeProvider({ children }) {
  const [isDark, setTheme] = useState(JSON.parse(localStorage.getItem("isDark")));
  return (
    <Theme.Provider value={[isDark, setTheme]}>
      <div className={`body ${isDark ? "dark-mode" : ""}`}>{children}</div>
    </Theme.Provider>
  );
}
