"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThemeProviderProps = React.PropsWithChildren<Record<string, any>>

export function ThemeProvider({ 
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Re-export the useTheme hook from next-themes
export { useTheme } from "next-themes"

