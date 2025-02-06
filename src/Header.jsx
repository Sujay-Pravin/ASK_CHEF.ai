import React from 'react'
import lightThemeIcon from "./assets/light_mode.png"
import darkThemeIcon from "./assets/dark_mode.png"

export default function Header(props) {
  return (
    <>
      <header id="header-bg">
          <h1>AskChef.ai</h1>  
          <div id="right-content">
            <a href="../index.html" id="theme">Go Back</a>
          </div>
      </header>
    </>
  )
}
