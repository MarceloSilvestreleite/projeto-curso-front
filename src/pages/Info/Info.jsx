import React from 'react';
import './Info.css';
// Importando imagens da pasta existente
import Porsche911 from '../../assets/images/porsche-911.svg'; 
import Porsche718 from '../../assets/images/porsche-718.svg';

const Info = () => {
  return (
    <div className="info-page">
      <section className="hero-banner">
        <h1>CONHEÇA NOSSA FROTA PREMIUM</h1>
        <p>Os melhores carros esportivos para sua experiência de direção</p>
      </section>

      <div className="vehicle-showcase">
        {/* Seção Porsche 911 */}
        <article className="vehicle-card">
          <div className="vehicle-image">
            <img src={Porsche911} alt="Porsche 911 Carrera 4S" />
          </div>
          <div className="vehicle-details">
            <h2>Porsche 911 Carrera 4S</h2>
            <div className="pricing-box">
              <h3>VALORES DE LOCAÇÃO</h3>
              <ul>
                <li><strong>Diária:</strong> R$ 2.800</li>
                <li><strong>3-6 dias:</strong> R$ 2.500/dia</li>
                <li><strong>Semana:</strong> R$ 15.000</li>
                <li><strong>Km livre:</strong> +R$ 400/dia</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Seção Porsche 718 */}
        <article className="vehicle-card reverse-layout">
          <div className="vehicle-image">
            <img src={Porsche718} alt="Porsche 718 Cayman" />
          </div>
          <div className="vehicle-details">
            <h2>Porsche 718 Cayman</h2>
            <p className="highlight-text">
              "O equilíbrio perfeito entre desempenho e elegância"
            </p>
            <ul className="feature-list">
              <li>Motor Boxer 4 cilindros turbo</li>
              <li>300 cv de potência</li>
              <li>0-100 km/h em 4.7s</li>
              <li>Design esportivo com aerodinâmica avançada</li>
            </ul>
          </div>
        </article>
      </div>

      <section className="location-info">
        <h2>DISPONÍVEL EM NOSSAS FILIAIS</h2>
        <p>São Paulo • Rio de Janeiro • Belo Horizonte • Curitiba • Brasília</p>
      </section>
    </div>
  );
};

export default Info;