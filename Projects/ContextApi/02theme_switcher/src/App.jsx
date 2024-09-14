import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'

function App() {


  const [themeMode, setThemeMode] = useState("light")

  const darkThemeMode = () => {
    setThemeMode("dark")
  }

  const lightThemeMode = () => {
    setThemeMode("light")
  }

  //Change in Theme

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  },
    [themeMode])

  return (
    <ThemeProvider ThemeProvider value={{ themeMode, darkThemeMode, lightThemeMode }
    }>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button */}
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
