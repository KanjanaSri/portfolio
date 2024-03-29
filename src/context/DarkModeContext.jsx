import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
