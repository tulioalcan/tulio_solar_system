import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets-container">
        <Title headline="Planetas" />
        <div className="planets-container2">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetImage={ planet.image }
              planetName={ planet.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
