import { BowlingGame } from '../src/BowlingGame'

describe('BowlingGame', () => {

  let game

	beforeEach(function(){
		game = new BowlingGame();
	});

  // it('hello world', () => {
  //   expect(game.score()).toBe(0);
  // })

  it('1 roll 1 strike', () => {
    game.roll(10);
    expect(game.score()).toBe(10);
  })

  it('2 rolls knocks 5 and 4 pins in a frame', () => {
    game.roll(5);
    game.roll(4);
    expect(game.score()).toBe(9);
  })

  it('3 rolls knocks 10, 3 and 4 pins through two frames', () => {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    expect(game.score()).toBe(24);
  })

  it('3 rolls knocks 5, 5 and 3 pins through two frames', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    expect(game.score()).toBe(16);
  })

  it('strikes double, then got spare', () => {
    game.roll(10);
    game.roll(10);
    game.roll(5);
    game.roll(5);
    expect(game.score()).toBe(55);
  })

  it('returns the first frame when starting a game', () => {
    expect(game.frame()).toBe(1);
  })

  it(' returns second frame after 1 strike', () => {
    game.roll(10);
    expect(game.frame()).toBe(2);
  })

  it(' returns 10 frame number after 9 strike', () => {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);

    expect(game.frame()).toBe(10);
  })

  it('all strikes', () => {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    expect(game.score()).toBe(300);
  })
})
