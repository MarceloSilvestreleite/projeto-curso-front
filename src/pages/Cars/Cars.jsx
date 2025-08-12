import './Cars.css';
import LamborghiniHuracan from '../../assets/cars-page/LamborghiniHuracan.svg';
import FerrariItalia from '../../assets/cars-page/FerrariItalia.svg';
import FordMustangGT from '../../assets/cars-page/FordMustangGT.svg';
import LamborghiniAventador from '../../assets/cars-page/LamborghiniAventador.svg';
import FordMustangEcoBoost from '../../assets/cars-page/FordMustangEcoBoost.svg';
import Porsche911 from '../../assets/cars-page/Porsche911.svg';
import MercedesAMG from '../../assets/cars-page/MercedesAMG.svg';
import BMWM4 from '../../assets/cars-page/BMWM4.svg';
import PorscheCayman from '../../assets/cars-page/PorscheCayman.svg';
import NissanGTR from '../../assets/cars-page/NissanGTR.svg';

const Cars = () => {
  const carsData = [
    {
      id: 1,
      name: 'Lamborghini Huracan',
      price: 'R$ 2.800.000',
      image: LamborghiniHuracan,
      features: ['Coupé', 'V10 5.2L', '610 HP', '0-100km/h em 2.9s'],
      description: 'O Huracán oferece uma experiência de condução emocionante com seu design agressivo e desempenho impressionante.',
      status: 'Disponível',
      rentalPrice: '1.900zł/dia'
    },
    {
      id: 2,
      name: 'Ferrari 458 Italia',
      price: 'R$ 1.950.000',
      image: FerrariItalia,
      features: ['Coupé', 'V8 4.5L', '570 HP', '0-100km/h em 3.4s'],
      description: 'A Ferrari 458 Italia é um esportivo italiano que combina elegância com desempenho excepcional.',
      status: 'Disponível',
      rentalPrice: '1.900zł/dia'
    },
    {
      id: 4,
      name: 'Ford Mustang GT 5.0',
      price: 'R$ 550.000',
      image: FordMustangGT,
      features: ['Coupé', 'V8 5.0L', '450 HP', '0-100km/h em 4.3s'],
      description: 'O ícone americano com motor V8 que oferece potência pura e um som inconfundível.',
      status: 'Disponível',
      rentalPrice: '1.200zł/dia'
    },
    {
      id: 5,
      name: 'Lamborghini Aventador',
      price: 'R$ 6.500.000',
      image: LamborghiniAventador,
      features: ['Coupé', 'V12 6.5L', '770 HP', '0-100km/h em 2.9s'],
      description: 'O supercarro flagship da Lamborghini com design agressivo e desempenho de outro mundo.',
      status: 'Indisponível',
      rentalPrice: '2.500zł/dia'
    },
    {
      id: 6,
      name: 'Ford Mustang 2.3 EcoBoost',
      price: 'R$ 350.000',
      image: FordMustangEcoBoost,
      features: ['Coupé', '2.3 EcoBoost', '310 HP', '0-100km/h em 5.8s'],
      description: 'Versão mais acessível do Mustang, mantendo o visual esportivo com melhor eficiência.',
      status: 'Alugado',
      rentalPrice: '950zł/dia'
    },
    {
      id: 8,
      name: 'Porsche 911 Carrera 4S',
      price: 'R$ 1.200.000',
      image: Porsche911,
      features: ['Coupé', '3.0 Twin Turbo', '450 HP', '0-100km/h em 3.4s'],
      description: 'O ícone esportivo alemão que combina tradição com tecnologia de ponta.',
      status: 'Disponível',
      rentalPrice: '1.890zł/dia'
    },
    {
      id: 9,
      name: 'Mercedes-AMG A45',
      price: 'R$ 500.000',
      image: MercedesAMG,
      features: ['Hatch', '2.0 Turbo', '421 HP', '0-100km/h em 3.9s'],
      description: 'O hatch mais potente do mundo, com tecnologia AMG e desempenho excepcional.',
      status: 'Disponível',
      rentalPrice: '890zł/dia'
    },
    {
      id: 10,
      name: 'BMW M4',
      price: 'R$ 850.000',
      image: BMWM4,
      features: ['Coupé', '3.0 Twin Turbo', '450 HP', '0-100km/h em 3.9s'],
      description: 'Esportivo alemão com design agressivo e desempenho que impressiona.',
      status: 'Disponível',
      rentalPrice: '1.890zł/dia'
    },
    {
      id: 12,
      name: 'Porsche 718 Cayman',
      price: 'R$ 650.000',
      image: PorscheCayman,
      features: ['Coupé', '2.0 Turbo', '300 HP', '0-100km/h em 4.7s'],
      description: 'Esportivo de motor central que oferece precisão alemã e diversão ao volante.',
      status: 'Disponível',
      rentalPrice: '1.200zł/dia'
    },
    {
      id: 14,
      name: 'Nissan GT-R',
      price: 'R$ 850.000',
      image: NissanGTR,
      features: ['Coupé', '3.8 Twin Turbo', '570 HP', '0-100km/h em 2.9s'],
      description: 'O Godzilla japonês, conhecido por seu desempenho excepcional e tecnologia avançada.',
      status: 'Disponível',
      rentalPrice: '1.890zł/dia'
    }
  ];

  return (
    <div className="main-content">
      <div className="hero-section">
        <h2>Nossa Frota Premium</h2>
        <p>Os veículos mais exclusivos para sua experiência de direção</p>
      </div>

      <div className="car-gallery">
        {carsData.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-image-container">
              <img 
                src={car.image} 
                alt={car.name} 
                className="car-image" 
                style={{ objectFit: 'contain', padding: '10px' }}
              />
              <div className={`status-badge ${car.status.toLowerCase()}`}>
                {car.status.toUpperCase()}
              </div>
            </div>
            <div className="car-info">
              <h3>{car.name}</h3>
              <div className="price-tag">{car.rentalPrice}</div>
              <p className="car-description">{car.description}</p>
              <ul className="features-list">
                {car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {car.status === 'Disponível' ? (
                <button className="cta-button">ALUGAR AGORA</button>
              ) : (
                <button className="cta-button" disabled>INDISPONÍVEL</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;