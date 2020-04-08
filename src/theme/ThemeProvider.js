import React from 'react'
import { ThemeContext } from './AppContext'

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    // This is a test to see if it updates the context
    // when it updates the state
    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: {
          palette: {
            primary: {
              base: state.theme.palette.primary.dark,
              dark: state.theme.palette.primary.base,
            },
          },
        },
      }))
    }

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: props.theme,
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
