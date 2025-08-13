import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import Info from './pages/Info/Info';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        <Header /> {/* Fixo em todas as páginas */}
        
        <main className="main-content">
          <Routes>
            {/* Rotas com conteúdo dinâmico */}
            <Route path="/" element={<Home />} />
            <Route path="/carros" element={<Cars />} />
            <Route path="/informacoes" element={<Info />} />
            <Route path="/contato" element={<Contact />} />
            
            {/* Rota para tratamento de erro 404 */}
            <Route path="*" element={
              <div className="error-page">
                <h1>404 - Página não encontrada</h1>
              </div>
            } />
          </Routes>
        </main>

        <Footer /> {/* Fixo em todas as páginas */}
      </div>
    </Router>
  );
}

export default App;