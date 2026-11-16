import React from "react"
import Recherche from "./Recherche"

const Header = () => (
  <header className="flex flex-row items-center justify-between z-10 gap-2">
    <div>
      <h1>
        <a href="/">
          <span className="text-2xl font-bold">dirobash</span>
        </a>
      </h1>
    </div>
    <div className="flex flex-row gap-2 items-center">
      <Recherche />
      <a href="/addQuote">Ajouter une citation</a>
    </div>
  </header>
)

export default Header
