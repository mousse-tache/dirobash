import React from "react"

const Header = () => (
  <header>
    <div className="logo"><h1><a href="/"><span className="text-2xl font-bold">DIRO Bash</span></a></h1></div>
        <div className="options">
          <p>
            <a href="recherche">Recherche</a> - 
            <a className="addquote" href="/addQuote">Ajouter une citation</a>
            - <span>
            Aucune citation en attente!			</span>
          </p>
    </div>
  </header>
)

export default Header
