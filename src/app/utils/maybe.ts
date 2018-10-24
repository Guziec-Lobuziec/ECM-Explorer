export class Maybe<A> {

  private constructor(private value: A | null | undefined) {}

  static empty(): Maybe<any> {
    return new Maybe<any>(null);
  }

  static apply<A>(value: A | null | undefined): Maybe<A> {
    if(value == null)
      return Maybe.empty();
    else if(typeof value === 'undefined')
      return Maybe.empty();
    else
      return new Maybe<A>(value);
  }

  public isEmpty(): boolean {return this.value == null;}

  public get():A {return this.value;}

  public getOrElse<B extends A>(fallback: (() => B) | B):A {
    return (this.isEmpty()) ? 
      ((typeof fallback === 'function') ? fallback() : fallback )
      : this.value;
  }


  public map<B>(f: (inner:A) => B):Maybe<B> {
    return this.isEmpty() ? Maybe.empty() : new Maybe<B>(f(this.value));
  }

  public flatMap<B>(f: (inner:A) => Maybe<B>):Maybe<B> {
    return this.isEmpty() ? Maybe.empty() : f(this.value);
  }

}
