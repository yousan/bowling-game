export class BowlingGame {
  private _score:number = 0;
  private _rollHistory:number[] = [];
  private _frames:number = 1;
  private _isFirst:boolean = true;

  roll(pins: number) {
    this._score += pins;
    if (this.isStrike(this._rollHistory[this._rollHistory.length - 1]) && this._frames !== 10 ) {
      this._score += pins;
    }

    if (this.isStrike(this._rollHistory[this._rollHistory.length - 2]) && this._frames !== 10) {
      this._score += pins;
    }

    if (this.isSpare(this._rollHistory[this._rollHistory.length - 1], this._rollHistory[this._rollHistory.length - 2])
        && this._frames !== 10 ) {
      this._score += pins;
    }
    this._rollHistory.push(pins);

    if ( this.isStrike(pins) || this.isSpare(this._rollHistory[this._rollHistory.length - 1], pins )) {
      this._isFirst = true;
      this._frames++;
    } else if ( ! this._isFirst ) {
      this._isFirst = true;
      this._frames++;
    } else {
      this._isFirst = false;
    }
  }

  frame(): number {
    return this._frames;
  }

  score() : number{
    return this._score;
  }

  isStrike(pins: number) : boolean{
    return pins === 10;
  }

  isSpare(pins1: number, pins2: number) {
    return (pins1 + pins2) === 10;
  }
}
