import './HeaderNav.css';
import { Link } from 'react-router-dom'; 

function Header () {
  return (
    <header className='header'>
      <div className='header-brand'>
        <Link to="/" className='brand-link'>
          <h1>🏡</h1>
        </Link>
      </div>

      <h2 className='header-page-title'>
        Seguros del hogar
      </h2>

      <nav className='header-nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to="/historial" className='nav-link' title="Historial">
              📄
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;