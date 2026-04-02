import { createContext } from "react";
import type { ThemeContextType } from "../types/themeTypes";

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;