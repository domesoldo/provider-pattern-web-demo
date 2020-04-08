import React, { Component } from 'react'
import './App.css'
import ThemeProvider from './theme/ThemeProvider'
import Box from './components/Box'
import {
  ThemeProvider as ThemeProviderPriceline,
  Box as BoxPL,
  Button,
} from 'pcln-design-system'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Design System</h1>

        <ThemeProvider
          theme={{
            palette: {
              primary: {
                base: '#ff001d',
                dark: '#ffa52f',
              },
            },
          }}
        >
          <Box />
        </ThemeProvider>

        <h1>Priceline Design System</h1>
        <ThemeProviderPriceline
          theme={{
            palette: {
              primary: {
                base: '#ff001d',
                dark: '#ffa52f',
              },
            },
          }}
        >
          <Button>Custom</Button>
          <BoxPL with={2} p={7}></BoxPL>
        </ThemeProviderPriceline>
      </div>
    )
  }
}

export default App
