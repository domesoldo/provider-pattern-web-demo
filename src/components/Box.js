import React from 'react'
import LandingPage from '../screens/LandingPageUseContext'

// A component in the middle doesn't have to
// pass the theme down explicitly
const Box = (props) => {
  return (
    <div>
      <LandingPage />
    </div>
  )
}

export default Box
