import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Menu = ( ) => {

    return <nav>
        <ul>
            <li>
                <Link to="/">Catalogue</Link>
            </li>
            <li>
                <Link to="/panier">Panier</Link>
            </li>

        </ul>
        {/**bien respecter les routes précisées dans le fichier index.js */}
    </nav>
}