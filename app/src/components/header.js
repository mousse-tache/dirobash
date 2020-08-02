import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="logo"><h1><a href="/"><span>DIRO Bash</span></a></h1></div>
        <div className="options">
          <p>
            <a href="recherche.php">Recherche</a> - 
            <a className="addquote" href="/addQuote">Ajouter une citation</a>
            - <span>
            Aucune citation en attente!			</span>
          </p>
    </div>
  </header>
)

export default Header
