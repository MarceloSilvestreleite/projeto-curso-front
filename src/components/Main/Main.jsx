import './Main.css';
import FerrariImg from '../../assets/carros/ferrari.jpg';
import Lamborghini from '../../assets/carros/lamborghini.jpg';
import porche from '../../assets/carros/porsche.jpg';
import mclaren from '../../assets/carros/mclaren.jpg';
import aston from '../../assets/carros/astonMartin.jpg';
import bugatti from '../../assets/carros/bugatti.jpg';
import mercedes from '../../assets/carros/image10.svg';
import audi from '../../assets/carros/audi.jpg';
import bentley from '../../assets/carros/bentley.jpg';
import koenigsegg from '../../assets/carros/koenigsegg.jpg';
import lexus from '../../assets/carros/lexus.jpg';
import ford from '../../assets/carros/image11.svg';
import pagani from '../../assets/carros/image20.svg';
import rollsRoyce from '../../assets/carros/rollsRoyce.jpg';

const Main = () => {
  const luxuryCars = [
    {
      id: 1,
      name: 'Ferrari 488 GTB',
      price: 'R$ 3.200.000',
      image: FerrariImg, // Usando a imagem importada
      features: ['V8 3.9L', '670 HP', '0-100km/h em 3.0s', 'Velocidade máxima 330km/h'],
      description: 'O Ferrari 488 GTB é um supercarro esportivo que combina desempenho excepcional com elegância italiana.'
    },
    {
      id: 2,
      name: 'Lamborghini Huracán',
      price: 'R$ 2.800.000',
      image: Lamborghini, // Usando a imagem importada
      features: ['V10 5.2L', '640 HP', '0-100km/h em 2.9s', 'Tração integral'],
      description: 'O Huracán oferece uma experiência de condução emocionante com seu design agressivo e desempenho impressionante.'
    },
    {
      id: 3,
      name: 'Porsche 911 Turbo S',
      price: 'R$ 1.800.000',
      image: porche, // Usando a imagem importada
      features: ['Boxer 6 3.8L', '650 HP', '0-100km/h em 2.7s', 'PDK 8 velocidades'],
      description: 'O 911 Turbo S é a combinação perfeita entre luxo, tecnologia e desempenho esportivo.'
    },
    {
      id: 4,
      name: 'McLaren 720S',
      price: 'R$ 3.500.000',
      image: mclaren,
      features: ['V8 4.0L', '720 HP', '0-100km/h em 2.8s', 'Fibra de carbono'],
      description: 'Com design aerodinâmico e tecnologia de ponta, o 720S redefine o conceito de supercarro.'
    }, // Faltava esta vírgula aqui
    {
      id: 5,
      name: 'Aston Martin DBS Superleggera',
      price: 'R$ 2.950.000',
      image: aston,
      features: ['V12 5.2L', '715 HP', '0-100km/h em 3.4s', 'Velocidade máxima 340km/h'],
      description: 'Elegância britânica com desempenho brutal. O DBS Superleggera é a definição de um grand tourer com alma de supercarro.'
    },
    {
      id: 6,
      name: 'Bugatti Chiron Sport',
      price: 'R$ 18.000.000',
      image: bugatti,
      features: ['W16 8.0L quad-turbo', '1500 HP', '0-100km/h em 2.4s', 'Velocidade máxima limitada a 420km/h'],
      description: 'O ápice da engenharia automotiva. O Chiron Sport é uma obra de arte em movimento que redefine os limites de velocidade.'
    },
    {
      id: 7,
      name: 'Mercedes-AMG GT R Pro',
      price: 'R$ 1.950.000',
      image: mercedes,
      features: ['V8 4.0L biturbo', '585 HP', '0-100km/h em 3.6s', 'Aerodinâmica ativa'],
      description: 'O mais radical dos AMG, com tecnologia derivada diretamente das pistas de corrida para as ruas.'
    },
    {
      id: 8,
      name: 'Audi R8 V10 Performance',
      price: 'R$ 2.300.000',
      image: audi,
      features: ['V10 5.2L', '620 HP', '0-100km/h em 3.1s', 'Quattro tração integral'],
      description: 'Precisão alemã com o rugido inconfundível de um V10 aspirado. O esportivo definitivo para os puristas.'
    },
    {
      id: 9,
      name: 'Bentley Continental GT Speed',
      price: 'R$ 2.750.000',
      image: bentley,
      features: ['W12 6.0L', '650 HP', '0-100km/h em 3.6s', 'Interior em madeira nobre e couro'],
      description: 'O grand tourer mais luxuoso do mundo, com desempenho que rivaliza os superesportivos.'
    },
    {
      id: 10,
      name: 'Koenigsegg Jesko Absolut',
      price: 'R$ 25.000.000',
      image: koenigsegg,
      features: ['V8 5.0L biturbo', '1600 HP (com E85)', '0-100km/h em 2.5s', 'Velocidade máxima teórica 480km/h'],
      description: 'A máquina mais extrema já criada pela Koenigsegg, projetada para quebrar todos os recordes de velocidade.'
    },
    {
      id: 11,
      name: 'Lexus LFA',
      price: 'R$ 6.500.000',
      image: lexus,
      features: ['V10 4.8L', '560 HP', '0-100km/h em 3.7s', 'Motor desenvolvido com a Yamaha'],
      description: 'Raridade japonesa com um dos melhores sons de motor já criados. Apenas 500 unidades produzidas no mundo.'
    },
    {
      id: 12,
      name: 'Ford GT Heritage Edition',
      price: 'R$ 4.800.000',
      image: ford,
      features: ['V6 3.5L EcoBoost', '660 HP', '0-100km/h em 2.8s', 'Chassis em fibra de carbono'],
      description: 'A lenda americana reinventada. Herança das vitórias em Le Mans com tecnologia do século XXI.'
    },
    {
      id: 13,
      name: 'Pagani Huayra BC',
      price: 'R$ 15.000.000',
      image: pagani,
      features: ['V12 6.0L AMG', '800 HP', '0-100km/h em 2.8s', 'Carroceria em carbotitanium'],
      description: 'A obra-prima de Horacio Pagani, onde arte e engenharia se encontram no mais alto nível.'
    },
    {
      id: 14,
      name: 'Rolls-Royce Wraith Black Badge',
      price: 'R$ 4.200.000',
      image: rollsRoyce,
      features: ['V12 6.6L', '632 HP', '0-100km/h em 4.3s', 'Teto estrelado personalizável'],
      description: 'O lado sombrio do luxo. Wraith Black Badge combina prestígio Rolls-Royce com atitude rebelde.'
    }
  ];

  return (
    <main className="main-content">
      <section className="hero-section">
        <h2>Oferta Especial</h2>
        <p>Descubra nossa exclusiva frota de carros esportivos de luxo</p>
      </section>

      <div className="car-gallery">
        {luxuryCars.map(car => (
          <div key={car.id} className="car-card">
            <div className="car-image-container">
              {car.image ? (
                <img src={car.image} alt={car.name} className="car-image" />
              ) : (
                <div className="car-image-placeholder">{car.name}</div>
              )}
            </div>
            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="price-tag">{car.price}</p>
              <p className="car-description">{car.description}</p>
              <ul className="features-list">
                {car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="cta-button">Agendar Test Drive</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;