// context/ThemeContext.jsx
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isLight, setIsLight] = useState(false)

    const toggleTheme = () => {
        setIsLight(prev => !prev)
        document.documentElement.classList.toggle('light')
    }

    return (
        <ThemeContext.Provider value={{ isLight, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)