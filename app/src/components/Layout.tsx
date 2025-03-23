import React from "react"

import Header from "./Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header/>            
      <div>
        <main>
          <Outlet />  
        </main>        
      </div>
      <footer>
          © {new Date().getFullYear()}, Rip-off from
          {` `}
          <a target="_blank" href="http://dirobash.tolarian.com" rel="noreferrer">Dirobash</a>
      </footer>
    </>
  )
}

export default Layout
