# Documentation

* Callbacks
* [`Enumerable<TSource>`](Enumerable.md)
* [`EnumerableConstructor`](EnumerableConstructor.md)
* [`Grouping<TKey, TSource>`](Grouping.md)
* [`GroupingConstructor`](GroupingConstructor.md)
* [`IEnumerable<TSource>`](IEnumerable.md)
* [`IGrouping<TKey, TSource>`](IGrouping.md)
* [`IOrderedEnumerable<TSource>`](IOrderedEnumerable.md)
* [Built-in Iterables](iterables.md)

---

## Callbacks

```ts
interface AggregateFunction<TSource, TResult> {
  (accumulator: TResult, value: TSource, index: number, source: IEnumerable<TSource>): TResult
}

interface CompareFunction<TSource> {
  (a: TSource, b: TSource): number
}

interface EqualityFunction<TSource> {
  (a: TSource, b: TSource): boolean
}

interface PredicateFunction<TSource> {
  (value: TSource, index: number, source: IEnumerable<TSource>): boolean
}

interface ResultFunction<TFirst, TSecond, TResult> {
  (first: TFirst, second: TSecond, index: number): TResult
}

interface SelectFunction<TSource, TResult> {
  (value: TSource): TResult
}

interface IndexedSelectFunction<TSource, TResult> {
  (value: TSource, index: number, source: IEnumerable<TSource>): TResult
}

interface SelectManyFunction<TSource, TResult> {
  (value: TSource): IEnumerable<TResult>
}

interface IndexedSelectManyFunction<TSource, TResult> {
  (value: TSource, index: number, source: IEnumerable<TSource>): IEnumerable<TResult>
}
```
