import { IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { ThemeProvider } from 'next-themes';

// Custom hook to manage color mode
export function useColorMode() {
  const [colorMode, setColorMode] = useState('light')

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        setColorMode(storedTheme)
        document.documentElement.classList.toggle('dark', storedTheme === 'dark')
      }
    }
  }, [])

  const toggleColorMode = () => {
    const newMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newMode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newMode)
      document.documentElement.classList.toggle('dark', newMode === 'dark')
    }
  }

  return { colorMode, toggleColorMode }
}

// Icon based on the current color mode
export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

// Button to toggle the color mode
export function ColorModeButton(props) {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
      size="sm"
      {...props}
    >
      <ColorModeIcon />
    </IconButton>
  )
}
