import { useState } from 'react';
import GameService from '../services/GameService';

export default function Index() {
  const [games, setGames] = useState([]);

  async function getGames() {
    const gamesResponse = await GameService.GetGames();
    setGames(gamesResponse);
    console.log(gamesResponse);
    console.log(games);
  }

  async function createGame() {
    const game = {
      name: 'Puzzle Infinite',
      images: ['url1', 'irl2'],
      description: 'description del juego puzzle',
    };
    const response = await GameService.CreateGame(game);
    console.log('game created', response);
  }

  async function deleteGameById(id) {
    const gamesResponse = await GameService.DeleteGamebyId(id);
    console.log('Game deleted: ', gamesResponse);
  }

  return (
    <div>
      This is index and hust has more text
      <button onClick={() => getGames()} style={{ backgroundColor: 'blue' }}>
        Get all Games
      </button>
      <button onClick={() => createGame()} style={{ backgroundColor: 'blue' }}>
        Create Game
      </button>
      <button
        onClick={() => deleteGameById(2)}
        style={{ backgroundColor: 'blue' }}
      >
        Delete game
      </button>
    </div>
  );
}
