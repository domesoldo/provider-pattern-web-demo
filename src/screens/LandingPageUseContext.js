import React, { useContext } from 'react'
import '../App.css'
import { ThemeContext } from '../theme/AppContext'

const LandingPageUseContext = (props) => {
  // This class uses use context
  const context = useContext(ThemeContext)
  return (
    <div className="App">
      <button
        onClick={context.toggleTheme}
        style={{
          height: 50,
          width: 100,
          backgroundColor: context.theme.palette.primary.base,
        }}
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default LandingPageUseContext
