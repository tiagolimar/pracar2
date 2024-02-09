import { Link } from 'react-router-dom'
import './style.css'

export const NavBottom = () => {
  return (
    <div className="nav-bottom pt-1 ms-4">
        <ul className="navbar-nav flex-row gap-1">
            <li className="nav-item"><Link to="#">Home</Link></li>
            <li className="nav-item"><Link to="#">Meus pedidos</Link></li>
            <li className="nav-item"><Link to="#">Login</Link></li>
        </ul>
    </div> 
    )
}
