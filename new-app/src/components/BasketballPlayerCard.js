import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src='https://parade.com/.image/t_share/MTk2NjY1OTQ2MzU2NTkwNTU5/michael-jordan-net-worth-ftr.jpg' alt={`${name}`} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p><strong>Points per game:</strong> {stats.pointsPerGame}</p>
        <p><strong>Assists per game:</strong> {stats.assistsPerGame}</p>
        <p><strong>Rebounds per game:</strong> {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
