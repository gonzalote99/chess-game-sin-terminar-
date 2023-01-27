class Queen extends Piece {
  constructor (position, name) {
    super (position, 'queen', name)
  }

  getAllowedMoves() {
    return [
      this.getMovesTop(),
      this.getMovesBottomRight(),
      this.getMovesBottomLeft(),
      this.getMovesBottom(),
      this.getMovesBottomRight(),
      this.getMovesBottomLeft(),
      this.getMovesBottomRight(),
      this.getMovesRight(),
      this.getMovesLeft(),

    ];
  }
}