import React, { createContext, useState } from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import Home from "./pages/Home";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

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
          <Switch
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
        </span>
        <SearchAppBar />
        <Home />
      </Stack>
    </ThemeContext.Provider>
  );
}

export default App;
