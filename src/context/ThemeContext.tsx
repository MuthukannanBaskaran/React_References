import { createContext } from "react";
import type { ThemeContextType } from "../types/themeType";

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;