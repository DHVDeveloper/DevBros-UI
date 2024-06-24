'use client'
import { createContext, useContext } from "react";

interface ThemeContext {
    theme: string
    toggleTheme : () => void
}

export const ThemeContext = createContext<ThemeContext|undefined>(undefined)

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw Error ("For use ThemeContext you must to envolve Components in ThemeProvider")
    }
    return context
}