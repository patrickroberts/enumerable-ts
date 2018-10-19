# Documentation

---

* [Callbacks](callbacks.md)
* [`Enumerable<TSource>`](Enumerable.md)
* [`EnumerableConstructor`](EnumerableConstructor.md)
* [`Grouping<TKey, TSource>`](Grouping.md)
* [`GroupingConstructor`](GroupingConstructor.md)
* [`IEnumerable<TSource>`](IEnumerable.md)
* [`IGrouping<TKey, TSource>`](IGrouping.md)
* `IOrderedEnumerable<TSource>`
* [Built-in Iterables](iterables.md)

## `IOrderedEnumerable<TSource>`

---

```ts
interface IOrderedEnumerable<TSource> extends Enumerable<TSource> {
  readonly compare: CompareFunction<TSource>

  defaultIfEmpty (this: IOrderedEnumerable<TSource>, element: TSource): IOrderedEnumerable<TSource>

  distinct (this: IOrderedEnumerable<TSource>, equality: EqualityFunction<TSource>): IOrderedEnumerable<TSource>

  except (this: IOrderedEnumerable<TSource>, second: IEnumerable<TSource>, equality: EqualityFunction<TSource>): IOrderedEnumerable<TSource>

  intersect (this: IOrderedEnumerable<TSource>, second: IEnumerable<TSource>, equality?: EqualityFunction<TSource>): IOrderedEnumerable<TSource>

  memoize (this: IOrderedEnumerable<TSource>): IOrderedEnumerable<TSource>

  reverse (this: IOrderedEnumerable<TSource>): IOrderedEnumerable<TSource>

  skip (this: IOrderedEnumerable<TSource>, count: number): IOrderedEnumerable<TSource>

  skipLast (this: IOrderedEnumerable<TSource>, count: number): IOrderedEnumerable<TSource>

  skipWhile (this: IOrderedEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): IOrderedEnumerable<TSource>

  take (this: IOrderedEnumerable<TSource>, count: number): IOrderedEnumerable<TSource>

  takeLast (this: IOrderedEnumerable<TSource>, count: number): IOrderedEnumerable<TSource>

  takeWhile (this: IOrderedEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): IOrderedEnumerable<TSource>

  thenBy (this: IOrderedEnumerable<TSource>, compare: CompareFunction<TSource>): IOrderedEnumerable<TSource>

  thenByDescending (this: IOrderedEnumerable<TSource>, compare: CompareFunction<TSource>): IOrderedEnumerable<TSource>

  where (this: IOrderedEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): IOrderedEnumerable<TSource>
}
```
