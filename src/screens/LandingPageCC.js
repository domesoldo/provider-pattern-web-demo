import React from 'react'
import '../App.css'
import { ThemeContext } from '../AppContext'

class LandingPage extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".

  render() {
    return (
      <div className="App">
        <h1>Hi, This is the Landing Page</h1>
        <div>Context from a class component: {this.context}</div>
        <button onClick={() => {}} style={{ backgroundColor: this.context }}>
          Toggle Theme
        </button>
      </div>
    )
  }
}

LandingPage.contextType = ThemeContext

export default LandingPage
