import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>  {/* Conteúdo dinâmico das páginas */}
      <Footer />
    </div>
  );
};

export default Layout;