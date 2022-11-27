import React, { createContext, useState } from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import Home from "./pages/Home";
import Stack from "@mui/material/Stack";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Stack className="App" id={theme} sx={{ minHeight: "100vh" }}>
        <span className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <label>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
          </label>
        </span>
        <SearchAppBar />
        <Home />
      </Stack>
    </ThemeContext.Provider>
  );
}

export default App;
