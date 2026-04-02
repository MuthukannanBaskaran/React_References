import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ContentComponent() {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const { theme, toggleTheme } = context;

    return (
        <div>
            <h1>Content Component</h1>
            <p>This is the content component.</p>
            current theme: {theme}&nbsp;
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}