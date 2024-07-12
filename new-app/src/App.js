import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';

const App = () => {
  const player = {
    name: 'Michael Jordan',
    image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/893.png',
    position: 'Guard',
    stats: {
      pointsPerGame: 30.1,
      assistsPerGame: 5.3,
      reboundsPerGame: 6.2
    }
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
};

export default App;
