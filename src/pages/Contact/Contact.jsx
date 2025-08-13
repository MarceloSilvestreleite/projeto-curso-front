import React from 'react';
import './Contact.css';

const Contact = () => {
  // 9 avaliações aleatórias
  const reviews = [
    {
      name: "Carlos Silva",
      rating: 5,
      date: "2 dias atrás",
      text: "Atendimento excelente e carros impecáveis. Recomendo!"
    },
    {
      name: "Ana Paula",
      rating: 4,
      date: "1 semana atrás", 
      text: "Ótima experiência, só achei o combustível um pouco baixo."
    },
    {
      name: "Roberto Alves",
      rating: 5,
      date: "3 dias atrás",
      text: "Melhor locadora da região! Já aluguei 3 vezes."
    },
    {
      name: "Fernanda Lima",
      rating: 5,
      date: "1 mês atrás",
      text: "Carro novo e em perfeito estado. Superou expectativas!"
    },
    {
      name: "Marcos Oliveira",
      rating: 4,
      date: "2 semanas atrás",
      text: "Bom atendimento, mas a documentação foi demorada."
    },
    {
      name: "Juliana Santos",
      rating: 5,
      date: "5 dias atrás",
      text: "Experiência incrível com o Porsche 911. Voltarei!"
    },
    {
      name: "Ricardo Moura",
      rating: 3,
      date: "3 semanas atrás",
      text: "Carro bom, mas o preço poderia ser mais acessível."
    },
    {
      name: "Patrícia Gomes",
      rating: 5,
      date: "1 semana atrás",
      text: "Perfeito para nosso aniversário de casamento!"
    },
    {
      name: "Luana Costa",
      rating: 4,
      date: "4 dias atrás",
      text: "Ótimo custo-benefício. Senti falta de mais opções de cores."
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Informações de Contato</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info-map">
          <div className="contact-info">
            <div className="info-section">
              <h2>Endereço:</h2>
              <p>SESI São Gonçalo<br />Rua Marinho, 123<br />São Gonçalo - RJ</p>
            </div>

            <div className="info-section">
              <h2>Telefone:</h2>
              <p>(21) 98765-4321</p>
            </div>

            <div className="info-section">
              <h2>Horário:</h2>
              <p>Segunda a Domingo<br />08:00 às 22:00</p>
            </div>

            <div className="info-section">
              <h2>E-mail:</h2>
              <p>contato@sexycars.com.br</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.328384755889!2d-43.0453576!3d-22.8224515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99880f8ec3a82d%3A0x4e2e4b7a8a3a3a3a!2sSESI%20S%C3%A3o%20Gon%C3%A7alo!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              className="google-map"
              allowFullScreen
              loading="lazy"
              title="Localização da SexyCars"
            ></iframe>
          </div>
        </div>

        <div className="reviews-section">
          <h2>Avaliações dos Clientes</h2>
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <h3>{review.name}</h3>
                  <div className="stars">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <p className="review-date">{review.date}</p>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;