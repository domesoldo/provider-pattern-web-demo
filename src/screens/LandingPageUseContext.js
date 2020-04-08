import React, { useContext } from 'react'
import '../App.css'
import { ThemeContext } from '../AppContext'

const LandingPageUseContext = (props) => {
  // This class uses use context
  const context = useContext(ThemeContext)
  console.log('contextType from a use context', context)
  return (
    <div className="App">
      <h1>Hi, This is the Landing Page</h1>
      <div>Context from use context: {context.theme.background}</div>
      <button
        onClick={context.toggleTheme}
        style={{ backgroundColor: context.theme.background }}
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default LandingPageUseContext
