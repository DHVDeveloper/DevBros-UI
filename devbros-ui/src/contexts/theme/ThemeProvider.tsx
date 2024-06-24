'use client'
import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";



export function ThemeProvider({children} : {children:React.ReactNode}){
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const getStorageTheme = () => {
            const storageTheme = localStorage.getItem('theme');
            if(storageTheme){
                setTheme(storageTheme)
            } else{
                localStorage.setItem('theme', theme);
            }
        }
        getStorageTheme();
    },[])

    
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (<ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>)
}

