class Bishop extends Piece {
constructor (position, name) {
  super(position, 'bishop', name);


}

getAllowedMoves() {
  return [this.getMovesBottomRight(), this.getMovesBottomLeft(), this.getMovesBottomRight(), this.getMovesBottomLeft()];
}
}