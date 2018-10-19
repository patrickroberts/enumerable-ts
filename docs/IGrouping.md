# Documentation

* [Callbacks](callbacks.md)
* [`Enumerable<TSource>`](Enumerable.md)
* [`EnumerableConstructor`](EnumerableConstructor.md)
* [`Grouping<TKey, TSource>`](Grouping.md)
* [`GroupingConstructor`](GroupingConstructor.md)
* [`IEnumerable<TSource>`](IEnumerable.md)
* `IGrouping<TKey, TSource>`
* [`IOrderedEnumerable<TSource>`](IOrderedEnumerable.md)
* [Built-in Iterables](iterables.md)

## `IGrouping<TKey, TSource>`

```ts
interface IGrouping<TKey, TSource> extends IEnumerable<TSource> {
  readonly key: TKey
}
```
