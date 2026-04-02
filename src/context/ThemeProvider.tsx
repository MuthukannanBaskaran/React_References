import ThemeContext from "./ThemeContext";
import { useState } from "react";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>("light");

    const toggleTheme = () => {
        console.log("Toggling theme...", theme);
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    const _value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={_value}>
            {children}
        </ThemeContext.Provider>
    );
};  
