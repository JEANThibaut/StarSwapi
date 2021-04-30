// On utilise le composant Link du router
import {Link} from "react-router-dom";
// Ce composant est étroitement lié au système de routing quisqu'il contient les liens de navigations
function Nav() {
    // On renvoie une nav Bootstrap classique
    // remarquez simplement que les a sont remplacés par des composants Link
    // Chaque Link pointe vers une route spécifique qui appellera un de nos composants personnels
    return (
        <nav className="bg-secondary">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/article">Acceuil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/recherche">Recherche</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/people">Les personnages</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;