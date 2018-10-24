import { Maybe } from './maybe';

fdescribe('Maybe', () => {

  it('apply should create an instance', () => {
    expect(Maybe.apply(1)).toBeTruthy();
  });

  it('empty should create an instance', () => {
    expect(Maybe.empty()).toBeTruthy();
  });

  it('empty should be empty', () => {
    let empty = Maybe.empty();
    expect(empty.isEmpty()).toBeTruthy();
  });

  it('empty should return null', () => {
    let empty = Maybe.empty();
    expect(empty.get() === null).toBeTruthy();
  });

  it('apply should non-empty instance', () => {
    let some = Maybe.apply(1);
    expect(some.isEmpty()).toBeFalsy();
  });

  it('apply should return something', () => {
    let some = Maybe.apply(1);
    expect(some.get() === 1).toBeTruthy();
  });

  it('apply should return null if given "null"', () => {
    let some = Maybe.apply(null);
    expect(some.isEmpty()).toBeTruthy();
  });

  it('apply should return null if given "undefined"', () => {
    let some = Maybe.apply(undefined);
    expect(some.isEmpty()).toBeTruthy();
  });

  it('getOrElse should return something if it is present', () => {
    let some = Maybe.apply(1);
    expect(some.getOrElse(() => {return 2}) === 1).toBeTruthy();
  });

  it('getOrElse should return fallback if it is empty', () => {
    let empty = Maybe.empty();
    expect(empty.getOrElse(3) === 3).toBeTruthy();
  });

  it('map should return something if it is present', () => {
    let some = Maybe.apply(1);
    expect(some.map( n=> n*2 ).get() === 2).toBeTruthy();
  });

  it('map should return empty if it is empty', () => {
    let empty = Maybe.empty();
    expect(empty.map( n=>n+1 ).isEmpty()).toBeTruthy();
  });

  it('flatMap should return something if it is present', () => {
    let some = Maybe.apply(1);
    expect(some.flatMap( (n) => {return Maybe.apply(n*3)} ).get() === 3).toBeTruthy();
  });

  it('flatMap should return empty if it is empty', () => {
    let empty = Maybe.empty();
    expect(empty.flatMap( (n) => {return Maybe.apply(n+3)} ).isEmpty()).toBeTruthy();
  });
});
