import './HeaderNav.css'; 

function Header () {
    return (
        <header className='header'>
            
            <div className='header-brand'>
                <a href="/" className='brand-link'>
                    <h1>🛡️</h1>
                </a>
            </div>
        
            <h2 className='header-page-title'>
                Seguros del hogar
            </h2>
            
            <nav className='header-nav'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="/historial" className='nav-link' title="Historial">📝</a>
                    </li>  
                </ul>
            </nav>
        </header>
    )
}

export default Header;