# Documentation

* [Callbacks](callbacks.md)
* [`Enumerable<TSource>`](Enumerable.md)
* [`EnumerableConstructor`](EnumerableConstructor.md)
* [`Grouping<TKey, TSource>`](Grouping.md)
* `GroupingConstructor`
* [`IEnumerable<TSource>`](IEnumerable.md)
* [`IGrouping<TKey, TSource>`](IGrouping.md)
* [`IOrderedEnumerable<TSource>`](IOrderedEnumerable.md)
* [Built-in Iterables](iterables.md)

## `GroupingConstructor`

```ts
interface GroupingConstructor extends EnumerableConstructor {
  readonly prototype: IGrouping<any, any>

  new<TSource, TKey> (iterator: () => IterableIterator<TSource>, key: TKey): Grouping<TKey, TSource>
  new<TSource, TKey> (iterator: () => IterableIterator<TSource>, compare: undefined, key: TKey): Grouping<TSource, TKey>
  new<TSource, TKey> (iterator: () => IterableIterator<TSource>, compare: CompareFunction<TSource>, key: TKey): IOrderedGrouping<TKey, TSource>

  new<TKey> (iterator: () => IterableIterator<any>, key: TKey): Grouping<TKey, any>
  new<TKey> (iterator: () => IterableIterator<any>, compare: undefined, key: TKey): Grouping<TKey, any>
  new<TKey> (iterator: () => IterableIterator<any>, compare: CompareFunction<any>, key: TKey): IOrderedGrouping<TKey, any>
}
```
