import { createContext, useState } from "react";

export type ThemeName = "dark" | "light";
interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
});
