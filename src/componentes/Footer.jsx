import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='footer-content'>   
                <p className='footer-title'>Cotización de Seguros de Hogar</p>
                <small className='footer-copyright'> 
                    &copy; {currentYear} - Franco Agustin de Igartua. Todos los derechos reservados.
                </small>
            </div>
        </footer>
    );
}

export default Footer;
