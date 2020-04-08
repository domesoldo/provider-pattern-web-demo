import React from 'react'
import { ThemeContext } from '../AppContext'
import { themes } from './theme'
import Box from '../components/Box'

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
    }

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  // Use a Provider to pass the current theme to the tree below. Any
  // component can read it, no matter how deep it is. In this example, we're
  // passing "dark" as the current value.
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
