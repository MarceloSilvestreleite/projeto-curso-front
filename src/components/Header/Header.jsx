import './Header.css';
import logo from '../../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className="sexy-cars-header">
      {/* Linha Superior - Contatos */}
      <div className="contact-row">
        <div className="phone-email">
          <span>+48 501 140 391</span>
          <span>biuro@sexycars.pl</span>
        </div>
      </div>

      {/* Linha do Meio - Logo e Menu */}
      <div className="main-row">
        <div className="logo-container">
          <img src={logo} alt="Sexy Cars" className="logo-image" />
          <div className="logo-text">KRSKM19</div>
        </div>
        
        <nav className="main-menu">
  <NavLink 
    to="/" 
    end 
    className={({ isActive }) => isActive ? 'active-link' : ''}
  >
    Home
  </NavLink>
  <NavLink 
    to="/carros" 
    className={({ isActive }) => isActive ? 'active-link' : ''}
  >
    Carros
  </NavLink>
  <NavLink 
    to="/informacoes"
    className={({ isActive }) => isActive ? 'active-link' : ''}
  >
    Informações
  </NavLink>
  <NavLink 
    to="/contato"
    className={({ isActive }) => isActive ? 'active-link' : ''}
  >
    Contato
  </NavLink>
</nav>
      </div>

      {/* Linha Inferior - Slogan */}
      <div className="slogan-row">
        <h1>Locadora de Sonhos</h1>
        <h2>Realizamos o seu!</h2>
      </div>
    </header>
  );
};

export default Header;