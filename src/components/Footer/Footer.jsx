import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          ©2024 Luxo Cars - Todos os direitos reservados.
        </div>
        
        <div className="footer-contact">
          <p>Telefone: +55 (XX) XXXX-XXXX</p>
          <p>Endereço: Av. Paulista, 1000 - São Paulo/SP</p>
          <p>Email: contato@luxocars.com.br</p>
        </div>
        
        <div className="footer-info">
          <p>Frota de luxo disponível: Ferrari, Lamborghini, BMW, Porsche | Locação em principais capitais brasileiras</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;