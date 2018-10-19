# Documentation

* [Callbacks](callbacks.md)
* [`Enumerable<TSource>`](Enumerable.md)
* `EnumerableConstructor`
* [`Grouping<TKey, TSource>`](Grouping.md)
* [`GroupingConstructor`](GroupingConstructor.md)
* [`IEnumerable<TSource>`](IEnumerable.md)
* [`IGrouping<TKey, TSource>`](IGrouping.md)
* [`IOrderedEnumerable<TSource>`](IOrderedEnumerable.md)
* [Built-in Iterables](iterables.md)

---

## `EnumerableConstructor`

```ts
interface EnumerableConstructor {
  readonly prototype: Enumerable<any>

  new<TSource> (iterator: () => IterableIterator<TSource>, compare?: undefined): Enumerable<TSource>
  new<TSource> (iterator: () => IterableIterator<TSource>, compare: CompareFunction<TSource>): IOrderedEnumerable<TSource>

  new (iterator: () => IterableIterator<any>, compare?: undefined): Enumerable<any>
  new (iterator: () => IterableIterator<any>, compare: CompareFunction<any>): IOrderedEnumerable<any>

  empty<TSource> (compare?: undefined): Enumerable<TSource>
  empty<TSource> (compare: CompareFunction<TSource>): IOrderedEnumerable<TSource>

  isEnumerable<TSource> (iterable: Iterable<TSource>): iterable is Enumerable<TSource>

  range (start: number, count: number): Enumerable<number> | never

  repeat<TSource> (element: TSource, count: number): Enumerable<TSource>
}
```
