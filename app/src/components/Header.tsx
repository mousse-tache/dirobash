import React from "react"

const Header = () => (
  <header className="flex flex-row align-center justify-between">
    <div>
      <h1>
        <a href="/">
          <span className="text-2xl font-bold">DIRO Bash</span>
        </a>
      </h1>
    </div>
    <div className="flex flex-row gap-5">
      <a href="recherche">Recherche</a>
      <a href="/addQuote">Ajouter une citation</a>
    </div>
  </header>
)

export default Header
