import React from "react"

import Header from "./Header"
import { Outlet } from "react-router-dom"
import { useKonamiCode } from "../custom-hooks/useKonamiCode"

const Layout = () => {
  const konamicode = useKonamiCode();

  const random = Math.floor(Math.random() * 2);

  const cursors = ["cursor-gabceal", "cursor-gabcdeer"];

  return (
    <div className={`flex flex-col gap-3 w-3/4 m-auto mt-3 ${konamicode && cursors[random]}`}>
      <Header/>            
      <div>
        <main>
          <Outlet />  
        </main>        
      </div>
      <footer>
          © {new Date().getFullYear()}, Inspired from
          {` `}
          <a target="_blank" href="http://dirobash.tolarian.com" rel="noreferrer">Dirobash</a>,
          {` `}
          with an overengineered <a target="_blank" href="https://github.com/mousse-tache/dirobash" rel="noreferrer">new twist</a>
      </footer>
    </div>
  )
}

export default Layout
