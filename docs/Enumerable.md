# Documentation

* [Callbacks](callbacks.md)
* `Enumerable<TSource>`
* [`EnumerableConstructor`](EnumerableConstructor.md)
* [`Grouping<TKey, TSource>`](Grouping.md)
* [`GroupingConstructor`](GroupingConstructor.md)
* [`IEnumerable<TSource>`](IEnumerable.md)
* [`IGrouping<TKey, TSource>`](IGrouping.md)
* [`IOrderedEnumerable<TSource>`](IOrderedEnumerable.md)
* [Built-in Iterables](iterables.md)

## `Enumerable<TSource>`

```ts
class Enumerable<TSource> implements IEnumerable<TSource> {
  readonly [Symbol.iterator]: () => IterableIterator<TSource>
  readonly compare: undefined | CompareFunction<TSource>

  constructor (iterator: () => IterableIterator<TSource>, compare?: CompareFunction<TSource>)

  concat (this: IEnumerable<TSource>, ...items: IEnumerable<TSource>[]): Enumerable<TSource>

  join<TInner, TKey, TResult> (this: IEnumerable<TSource>, inner: IEnumerable<TInner>, selectOuter: IndexedSelectFunction<TSource, TKey>, selectInner: IndexedSelectFunction<TInner, TKey>, selectResult: ResultFunction<TSource, TInner, TResult>, equality?: EqualityFunction<TKey>): Enumerable<TResult>

  reverse (this: IEnumerable<TSource>): Enumerable<TSource>
}
```
