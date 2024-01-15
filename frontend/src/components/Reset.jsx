import GameState from "./GameState";

function Reset({ gameState }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return <button className="reset-button">Reset</button>;
}

export default Reset;
