# Documentation

* [Callbacks](callbacks.md)
* [`Enumerable<TSource>`](Enumerable.md)
* [`EnumerableConstructor`](EnumerableConstructor.md)
* `Grouping<TKey, TSource>`
* [`GroupingConstructor`](GroupingConstructor.md)
* [`IEnumerable<TSource>`](IEnumerable.md)
* [`IGrouping<TKey, TSource>`](IGrouping.md)
* [`IOrderedEnumerable<TSource>`](IOrderedEnumerable.md)
* [Built-in Iterables](iterables.md)

---

## `Grouping<TKey, TSource>`

```ts
class Grouping<TKey, TSource> extends Enumerable<TSource> {
  readonly key: TKey

  constructor (iteratorFn: () => IterableIterator<TSource>, key: TKey)
  constructor (iteratorFn: () => IterableIterator<TSource>, compare: undefined | CompareFunction<TSource>, key: TKey)
}
```
