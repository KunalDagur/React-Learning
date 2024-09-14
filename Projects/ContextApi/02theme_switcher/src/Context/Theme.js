import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'Light',
    darkThemeMode: () => { },
    lightThemeMode: () => { }
})

export const ThemeProvider = ThemeContext.Provider

export function useTheme() {
    return useContext(ThemeContext)
}