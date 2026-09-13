import React, { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({
  theme: "dark",
  setTheme: () => null,
})

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("vite-ui-theme") || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")
    root.classList.add(theme)

    localStorage.setItem("vite-ui-theme", theme)
  }, [theme])

  return (
    <ThemeProviderContext.Provider {...props} value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
