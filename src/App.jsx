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
    <Router>
      <div className="app-container">
        <Header /> {/* Fixo em todas as páginas */}
        
        <Routes>
          {/* Rotas com conteúdo dinâmico */}
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Cars />} />
          <Route path="/informacoes" element={<Info />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>

        <Footer /> {/* Fixo em todas as páginas */}
      </div>
    </Router>
  );
}

export default App;