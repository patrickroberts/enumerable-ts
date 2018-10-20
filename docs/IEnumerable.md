# Documentation

* [Callbacks](callbacks.md)
* [`Enumerable<TSource>`](Enumerable.md)
* [`EnumerableConstructor`](EnumerableConstructor.md)
* [`Grouping<TKey, TSource>`](Grouping.md)
* [`GroupingConstructor`](GroupingConstructor.md)
* `IEnumerable<TSource>`
* [`IGrouping<TKey, TSource>`](IGrouping.md)
* [`IOrderedEnumerable<TSource>`](IOrderedEnumerable.md)
* [Built-in Iterables](iterables.md)

## `IEnumerable<TSource>`

```ts
interface IEnumerable<TSource> {
  [Symbol.iterator] (): IterableIterator<TSource>

  aggregate (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TSource>): TSource | never
  aggregate<TAccumulate> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TAccumulate>, seed: TAccumulate): TAccumulate
  aggregate<TAccumulate, TResult> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TAccumulate>, seed: TAccumulate, select: SelectFunction<TAccumulate, TResult>): TResult

  aggregateRight (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TSource>): TSource | never
  aggregateRight<TAccumulate> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TAccumulate>, seed: TAccumulate): TAccumulate
  aggregateRight<TAccumulate, TResult> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TAccumulate>, seed: TAccumulate, select: SelectFunction<TAccumulate, TResult>): TResult

  all (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): boolean

  any (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): boolean

  append (this: IEnumerable<TSource>, element: TSource): Enumerable<TSource>

  asEnumerable (this: Iterable<TSource>): Enumerable<TSource>

  average (this: IEnumerable<number>): number | never
  average (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, number>, context?: any): number | never

  contains (this: IEnumerable<TSource>, element: TSource, equality?: EqualityFunction<TSource>): boolean

  count (this: IEnumerable<TSource>, predicate?: PredicateFunction<TSource>, context?: any): number

  defaultIfEmpty (this: IEnumerable<TSource>, element: TSource): Enumerable<TSource>

  distinct (this: IEnumerable<TSource>, equality?: EqualityFunction<TSource>): Enumerable<TSource>

  elementAt (this: IEnumerable<TSource>, index: number): TSource | never

  elementAtOrDefault (this: IEnumerable<TSource>, index: number, element: TSource): TSource

  except (this: IEnumerable<TSource>, second: IEnumerable<TSource>, equality?: EqualityFunction<TSource>): Enumerable<TSource>

  first (this: IEnumerable<TSource>, predicate?: PredicateFunction<TSource>, context?: any): TSource | never

  firstOrDefault (this: IEnumerable<TSource>, element: TSource, predicate?: PredicateFunction<TSource>, context?: any): TSource

  groupBy<TKey> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>): Enumerable<IGrouping<TKey, TSource>>
  groupBy<TKey, TElement> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectElement: IndexedSelectFunction<TSource, TElement>): Enumerable<IGrouping<TKey, TElement>>
  groupBy<TKey, TElement, TResult> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectElement: IndexedSelectFunction<TSource, TElement>, selectResult: ResultFunction<TKey, IEnumerable<TElement>, TResult>): Enumerable<TResult>

  groupJoin<TInner, TKey> (this: IEnumerable<TSource>, inner: IEnumerable<TInner>, selectOuterKey: IndexedSelectFunction<TSource, TKey>, selectInnerKey: IndexedSelectFunction<TInner, TKey>): Enumerable<IGrouping<TSource, TInner>>
  groupJoin<TInner, TKey, TResult> (this: IEnumerable<TSource>, inner: IEnumerable<TInner>, selectOuterKey: IndexedSelectFunction<TSource, TKey>, selectInnerKey: IndexedSelectFunction<TInner, TKey>, selectResult: ResultFunction<TSource, IEnumerable<TInner>, TResult>): Enumerable<TResult>

  intersect (this: IEnumerable<TSource>, second: IEnumerable<TSource>, equality?: EqualityFunction<TSource>): Enumerable<TSource>

  last (this: IEnumerable<TSource>, predicate?: PredicateFunction<TSource>, context?: any): TSource | never

  lastOrDefault (this: IEnumerable<TSource>, element: TSource, predicate?: PredicateFunction<TSource>, context?: any): TSource

  max (this: IEnumerable<number>): number
  max (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, number>, context?: any): number

  memoize (this: IEnumerable<TSource>): Enumerable<TSource>

  min (this: IEnumerable<number>): number
  min (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, number>, context?: any): number

  orderBy (this: IEnumerable<TSource>, compare?: CompareFunction<TSource>): IOrderedEnumerable<TSource>

  orderByDescending (this: IEnumerable<TSource>, compare?: CompareFunction<TSource>): IOrderedEnumerable<TSource>

  prepend (this: IEnumerable<TSource>, element: TSource): Enumerable<TSource>

  select<TResult> (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, TResult>, context?: any): Enumerable<TResult>

  selectMany<TCollection> (this: IEnumerable<TSource>, select: IndexedSelectManyFunction<TSource, TCollection>, context?: any): Enumerable<TCollection>

  sequenceEqual (this: IEnumerable<TSource>, second: IEnumerable<TSource>, equality?: EqualityFunction<TSource>): boolean

  single (this: IEnumerable<TSource>, predicate?: PredicateFunction<TSource>, context?: any): TSource | never

  singleOrDefault (this: IEnumerable<TSource>, element: TSource, predicate?: PredicateFunction<TSource>, context?: any): TSource | never

  skip (this: IEnumerable<TSource>, count: number): Enumerable<TSource>

  skipLast (this: IEnumerable<TSource>, count: number): Enumerable<TSource>

  skipWhile (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): Enumerable<TSource>

  sum (this: IEnumerable<number>): number
  sum (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, number>, context?: any): number

  take (this: IEnumerable<TSource>, count: number): Enumerable<TSource>

  takeLast (this: IEnumerable<TSource>, count: number): Enumerable<TSource>

  takeWhile (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>): Enumerable<TSource>

  toArray (this: IEnumerable<TSource>): TSource[]

  toJSON (this: IEnumerable<TSource>): IEnumerable<TSource>

  toMap<TKey> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>): Map<TKey, TSource>
  toMap<TKey, TValue> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectValue: IndexedSelectFunction<TSource, TValue>): Map<TKey, TValue>

  toSet (this: IEnumerable<TSource>): Set<TSource>

  toLookup<TKey> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>): Map<TKey, Set<TSource>>
  toLookup<TKey, TValue> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectValue: IndexedSelectFunction<TSource, TValue>): Map<TKey, Set<TValue>>

  union (this: IEnumerable<TSource>, second: IEnumerable<TSource>, equality?: EqualityFunction<TSource>): Enumerable<TSource>

  where (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): Enumerable<TSource>

  zip<TSecond> (this: IEnumerable<TSource>, second: IEnumerable<TSecond>): Enumerable<[TSource, TSecond]>
  zip<TSecond, TResult> (this: IEnumerable<TSource>, second: IEnumerable<TSecond>, result: ResultFunction<TSource, TSecond, TResult>, context?: any): Enumerable<TResult>
}
```
