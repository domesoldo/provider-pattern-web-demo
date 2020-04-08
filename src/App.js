import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ThemeProvider from './theme/ThemeProvider'
import Box from './components/Box'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ThemeProvider>
          <Box />
        </ThemeProvider>
      </div>
    )
  }
}

export default App
