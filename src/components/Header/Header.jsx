import './Header.css';
import logo from '../../assets/logo/logo.png';
import phoneIcon from '../../assets/icons/phone-icon.png';
import emailIcon from '../../assets/icons/email-icon.png';

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
          <a href="/">Carros</a>
          <a href="/">Informações</a>
          <a href="/">Contato</a>
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