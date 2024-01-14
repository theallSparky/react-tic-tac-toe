import GameState from "./gameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>; //return nothing since game in progress
  }
}

export default GameOver;
