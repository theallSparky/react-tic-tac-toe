import Strike from "./Strike";
import Tile from "./Tile";

function Board() {
  return (
    <div className="board">
      <Tile className="right-border bottom-border" />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Strike />
    </div>
  );
}

export default Board;
