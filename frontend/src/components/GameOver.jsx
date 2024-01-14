import GameState from "./gameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>; //return nothing since game in progress
    case GameState.playerOWins:
      return <div className="game-over">O Wins!</div>;
    case GameState.playerXWins:
      return <div className="game-over">X Wins!</div>;
    case GameState.draw:
      return <div className="game-over">X Wins!</div>;
    default:
      return <></>;
  }
}

export default GameOver;
