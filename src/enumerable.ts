import {
  AggregateFunction,
  CompareFunction,
  EqualityFunction,
  PredicateFunction,
  ResultFunction,
  SelectFunction,
  IndexedSelectFunction,
  IndexedSelectManyFunction,
  selectFn,
  resultFn,
  predicateFn,
  equalityFn,
  compareFn,
  generatorFn
} from './util'

export interface EnumerableConstructor {
  readonly prototype: IEnumerable<any>

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

export interface GroupingConstructor extends EnumerableConstructor {
  readonly prototype: IGrouping<any, any>

  new<TSource, TKey> (iterator: () => IterableIterator<TSource>, key: TKey): Grouping<TKey, TSource>
  new<TSource, TKey> (iterator: () => IterableIterator<TSource>, compare: undefined, key: TKey): Grouping<TSource, TKey>
  new<TSource, TKey> (iterator: () => IterableIterator<TSource>, compare: CompareFunction<TSource>, key: TKey): IOrderedGrouping<TKey, TSource>

  new<TKey> (iterator: () => IterableIterator<any>, key: TKey): Grouping<TKey, any>
  new<TKey> (iterator: () => IterableIterator<any>, compare: undefined, key: TKey): Grouping<TKey, any>
  new<TKey> (iterator: () => IterableIterator<any>, compare: CompareFunction<any>, key: TKey): IOrderedGrouping<TKey, any>
}

export interface IEnumerable<TSource> {
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

export interface IGrouping<TKey, TSource> extends IEnumerable<TSource> {
  readonly key: TKey
}

export interface IOrderedEnumerable<TSource> extends Enumerable<TSource> {
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

export interface IOrderedGrouping<TKey, TSource> extends IOrderedEnumerable<TSource> {
  readonly key: TKey
}

const aggregateImpl = <TSource, TResult> (iterator: IterableIterator<TSource>, accumulator: TResult, aggregate: AggregateFunction<TSource, TResult>, index: number, source: IEnumerable<TSource>) => {
  for (const value of iterator) {
    accumulator = aggregate(accumulator, value, index++, source)
  }

  return accumulator
}

const aggregateRightImpl = <TSource, TResult> (array: TSource[], accumulator: TResult, aggregate: AggregateFunction<TSource, TResult>, index: number, source: IEnumerable<TSource>) => {
  while (index >= 0) {
    accumulator = aggregate(accumulator, array[index], index--, source)
  }

  return accumulator
}

const selectEntry = <TSource, TKey, TValue> (selectKey: IndexedSelectFunction<TSource, TKey>, selectValue: IndexedSelectFunction<TSource, TValue>): IndexedSelectFunction<TSource, [TKey, TValue]> => (value: TSource, index: number, source: IEnumerable<TSource>): [TKey, TValue] => [selectKey(value, index, source), selectValue(value, index, source)]

const aggregateGroup = <TKey, TElement> (map: Map<TKey, Set<TElement>>, [key, value]: [TKey, TElement]) => {
  const set = map.get(key)

  if (set) {
    set.add(value)
  } else {
    map.set(key, new Set([value]))
  }

  return map
}

export class Enumerable<TSource> implements IEnumerable<TSource> {
  readonly [Symbol.iterator]: () => IterableIterator<TSource>
  readonly compare: undefined | CompareFunction<TSource>

  constructor (iterator: () => IterableIterator<TSource>, compare?: CompareFunction<TSource>) {
    this[Symbol.iterator] = iterator
    this.compare = compare
  }

  aggregate (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TSource>): TSource | never
  aggregate<TAccumulate> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TAccumulate>, seed: TAccumulate): TAccumulate
  aggregate<TAccumulate, TResult> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TAccumulate>, seed: TAccumulate, select: SelectFunction<TAccumulate, TResult>): TResult
  aggregate<TAccumulate, TResult> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TSource> | AggregateFunction<TSource, TAccumulate>, seed?: TAccumulate, select?: SelectFunction<TAccumulate, TResult>): TSource | TAccumulate | TResult | never {
    const iterator = this[Symbol.iterator]()

    if (seed === undefined) {
      const { value, done } = iterator.next()

      if (done) {
        throw new RangeError('aggregate of empty enumerable')
      }

      return aggregateImpl(iterator, value, aggregate as AggregateFunction<TSource, TSource>, 1, this)
    }

    const result = aggregateImpl(iterator, seed, aggregate as AggregateFunction<TSource, TAccumulate>, 0, this)

    return select === undefined
      ? result
      : select(result)
  }

  aggregateRight (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TSource>): TSource | never
  aggregateRight<TAccumulate> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TAccumulate>, seed: TAccumulate): TAccumulate
  aggregateRight<TAccumulate, TResult> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TAccumulate>, seed: TAccumulate, select: SelectFunction<TAccumulate, TResult>): TResult
  aggregateRight<TAccumulate, TResult> (this: IEnumerable<TSource>, aggregate: AggregateFunction<TSource, TSource> | AggregateFunction<TSource, TAccumulate>, seed?: TAccumulate, select?: SelectFunction<TAccumulate, TResult>): TSource | TAccumulate | TResult | never {
    const array = this.toArray()
    const { length } = array

    if (seed === undefined) {
      if (length === 0) {
        throw new RangeError('aggregate of empty enumerable')
      }

      return aggregateRightImpl(array, array[length - 1], aggregate as AggregateFunction<TSource, TSource>, length - 2, this)
    }

    const result = aggregateRightImpl(array, seed, aggregate as AggregateFunction<TSource, TAccumulate>, length - 1, this)

    return select === undefined
      ? result
      : select(result)
  }

  all (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): boolean {
    let index = 0

    for (const value of this) {
      if (!predicate.call(context, value, index++, this)) {
        return false
      }
    }

    return true
  }

  any (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): boolean {
    let index = 0

    for (const value of this) {
      if (predicate.call(context, value, index++, this)) {
        return true
      }
    }

    return false
  }

  append (this: IEnumerable<TSource>, element: TSource): Enumerable<TSource> {
    return new Enumerable(function * (this: IEnumerable<TSource>, element: TSource) {
      yield * this
      yield element
    }.bind(this, element))
  }

  asEnumerable (this: Iterable<TSource>): Enumerable<TSource> {
    return Enumerable.isEnumerable(this)
      ? this
      : new Enumerable(this[Symbol.iterator].bind(this))
  }

  average (this: IEnumerable<number>): number | never
  average (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, number>, context?: any): number | never
  average (this: IEnumerable<number> | IEnumerable<TSource>, select?: IndexedSelectFunction<TSource, number>, context?: any): number | never {
    const average: AggregateFunction<number, number> = (accumulator, value, index) => (accumulator * index + value) / (index + 1)

    return select === undefined
      ? (this as IEnumerable<number>).aggregate(average)
      : (this as IEnumerable<TSource>).select(select as SelectFunction<TSource, number>, context).aggregate(average)
  }

  concat (this: IEnumerable<TSource>, ...items: IEnumerable<TSource>[]): Enumerable<TSource> {
    return new Enumerable(function * (this: IEnumerable<TSource>, items: IEnumerable<TSource>[]) {
      yield * this

      for (const item of items) {
        yield * item
      }
    }.bind(this, items))
  }

  contains (this: IEnumerable<TSource>, element: TSource, equality: EqualityFunction<TSource> = equalityFn): boolean {
    if (equality === equalityFn && this instanceof Set) {
      return this.has(element)
    }

    for (const value of this) {
      if (equality(element, value)) {
        return true
      }
    }

    return false
  }

  count (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource> = predicateFn, context?: any): number {
    if (predicate === predicateFn && Array.isArray(this)) {
      return this.length
    }

    let count = 0

    for (const _ of this.where(predicate, context)) {
      count++
    }

    return count
  }

  defaultIfEmpty (this: IEnumerable<TSource>, element: TSource): Enumerable<TSource> {
    return new Enumerable(function * (this: IEnumerable<TSource>, element: TSource) {
      const iterator = this[Symbol.iterator]()
      const { value, done } = iterator.next()

      if (done) {
        yield element
      } else {
        yield value
        yield * iterator
      }
    }.bind(this, element), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  distinct (this: IEnumerable<TSource>, equality: EqualityFunction<TSource> = equalityFn): Enumerable<TSource> {
    return equality === equalityFn
      ? new Enumerable(function * (this: IEnumerable<TSource>) {
        const set = new Set<TSource>()
        const unique = (value: TSource) => {
          if (set.has(value)) {
            return false
          }

          set.add(value)

          return true
        }

        yield * this.where(unique)
      }.bind(this), Enumerable.isEnumerable(this) ? this.compare : undefined)
      : new Enumerable(function * (this: IEnumerable<TSource>, equality: EqualityFunction<TSource>) {
        const set: TSource[] = []
        const unique = (value: TSource) => {
          if (set.contains(value, equality)) {
            return false
          }

          set.push(value)

          return true
        }

        yield * this.where(unique)
      }.bind(this, equality), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  elementAt (this: IEnumerable<TSource>, index: number): TSource | never {
    let i = 0

    if (Array.isArray(this)) {
      i = this.length

      if (i > index) {
        return this[index]
      }
    } else {
      for (const value of this) {
        if (i++ === index) {
          return value
        }
      }
    }

    throw new RangeError(`element at ${index} of count ${i} enumerable`)
  }

  elementAtOrDefault (this: IEnumerable<TSource>, index: number, element: TSource): TSource {
    if (Array.isArray(this)) {
      if (this.length > index) {
        return this[index]
      }
    } else {
      let i = 0

      for (const value of this) {
        if (i++ === index) {
          return value
        }
      }
    }

    return element
  }

  static empty<TSource> (compare?: undefined): Enumerable<TSource>
  static empty<TSource> (compare: CompareFunction<TSource>): IOrderedEnumerable<TSource>
  static empty<TSource> (compare?: undefined | CompareFunction<TSource>): Enumerable<TSource> {
    return new Enumerable(generatorFn as () => IterableIterator<TSource>, compare)
  }

  except (this: IEnumerable<TSource>, second: IEnumerable<TSource>, equality: EqualityFunction<TSource> = equalityFn): Enumerable<TSource> {
    return equality === equalityFn
      ? new Enumerable(function * (this: IEnumerable<TSource>, second: IEnumerable<TSource>) {
        const set = new Set(second)

        yield * this.where(value => !set.has(value))
      }.bind(this, second, equality), Enumerable.isEnumerable(this) ? this.compare : undefined)
      : this.where(value => !second.contains(value, equality))
  }

  first (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource> = predicateFn, context?: any): TSource | never {
    const { value, done } = this.where(predicate, context)[Symbol.iterator]().next()

    if (done) {
      throw new RangeError('first of empty enumerable')
    }

    return value
  }

  firstOrDefault (this: IEnumerable<TSource>, element: TSource, predicate: PredicateFunction<TSource> = predicateFn, context?: any): TSource {
    return this.where(predicate, context).defaultIfEmpty(element).first()
  }

  groupBy<TKey> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>): Enumerable<IGrouping<TKey, TSource>>
  groupBy<TKey, TElement> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectElement: IndexedSelectFunction<TSource, TElement>): Enumerable<IGrouping<TKey, TElement>>
  groupBy<TKey, TElement, TResult> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectElement: IndexedSelectFunction<TSource, TElement>, selectResult: ResultFunction<TKey, IEnumerable<TElement>, TResult>): Enumerable<TResult>
  groupBy<TKey, TElement, TResult> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectElement?: IndexedSelectFunction<TSource, TElement>, selectResult?: ResultFunction<TKey, IEnumerable<TElement>, TResult>): Enumerable<IGrouping<TKey, TSource>> | Enumerable<IGrouping<TKey, TElement>> | Enumerable<TResult> {
    return new Enumerable(function * (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectElement?: IndexedSelectFunction<TSource, TElement>, selectResult?: ResultFunction<TKey, IEnumerable<TElement>, TResult>) {
      const lookup = selectElement === undefined
        ? this.toLookup(selectKey)
        : this.toLookup(selectKey, selectElement)

      yield * selectResult === undefined
        ? (lookup as Map<TKey, Set<TSource>>).select(([key, set]) => new Grouping(set[Symbol.iterator].bind(set), Enumerable.isEnumerable(this) ? this.compare : undefined, key))
        : (lookup as Map<TKey, Set<TElement>>).select(([key, set], index) => selectResult(key, set, index))
    }.bind(this, selectKey, selectElement, selectResult)) as Enumerable<IGrouping<TKey, TSource>> | Enumerable<IGrouping<TKey, TElement>> | Enumerable<TResult>
  }

  groupJoin<TInner, TKey> (this: IEnumerable<TSource>, inner: IEnumerable<TInner>, selectOuterKey: IndexedSelectFunction<TSource, TKey>, selectInnerKey: IndexedSelectFunction<TInner, TKey>): Enumerable<IGrouping<TSource, TInner>>
  groupJoin<TInner, TKey, TResult> (this: IEnumerable<TSource>, inner: IEnumerable<TInner>, selectOuterKey: IndexedSelectFunction<TSource, TKey>, selectInnerKey: IndexedSelectFunction<TInner, TKey>, selectResult: ResultFunction<TSource, IEnumerable<TInner>, TResult>): Enumerable<TResult>
  groupJoin<TInner, TKey, TResult> (this: IEnumerable<TSource>, inner: IEnumerable<TInner>, selectOuterKey: IndexedSelectFunction<TSource, TKey>, selectInnerKey: IndexedSelectFunction<TInner, TKey>, selectResult?: ResultFunction<TSource, IEnumerable<TInner>, TResult>): Enumerable<IGrouping<TSource, TInner>> | Enumerable<TResult> {
    const outerEntries = this.select(selectEntry(selectOuterKey, selectFn as SelectFunction<TSource, TSource>))
    const innerGroups = inner.groupBy(selectInnerKey)
    const groups = outerEntries.select(
      ([outerKey, outer]) => new Grouping<TSource, TInner>(function * (innerGroups: IEnumerable<IGrouping<TKey, TInner>>, outerKey: TKey) {
        yield * innerGroups.firstOrDefault(
          new Grouping(generatorFn as () => IterableIterator<TInner>, outerKey),
          ({ key }) => equalityFn(key, outerKey)
        )
      }.bind(innerGroups, outerKey), outer) as IGrouping<TSource, TInner>
    )

    return selectResult === undefined
      ? groups
      : groups.select((group, index) => selectResult(group.key, group.asEnumerable(), index))
  }

  intersect (this: IEnumerable<TSource>, second: IEnumerable<TSource>, equality: EqualityFunction<TSource> = equalityFn): Enumerable<TSource> {
    return equality === equalityFn
      ? new Enumerable(function * (this: IEnumerable<TSource>, second: IEnumerable<TSource>) {
        const set = new Set(second)

        yield * this.where(value => set.has(value)).distinct()
      }.bind(this, second), Enumerable.isEnumerable(this) ? this.compare : undefined)
      : this.where(value => second.contains(value, equality)).distinct(equality)
  }

  static isEnumerable<TSource> (iterable: Iterable<TSource>): iterable is Enumerable<TSource> {
    return iterable.constructor === Enumerable
  }

  join<TInner, TKey, TResult> (this: IEnumerable<TSource>, inner: IEnumerable<TInner>, selectOuter: IndexedSelectFunction<TSource, TKey>, selectInner: IndexedSelectFunction<TInner, TKey>, selectResult: ResultFunction<TSource, TInner, TResult>, equality: EqualityFunction<TKey> = equalityFn): Enumerable<TResult> {
    const outerEntries = this.select(selectEntry(selectOuter, selectFn as SelectFunction<TSource, TSource>))
    const innerEntries = inner.select(selectEntry(selectInner, selectFn as SelectFunction<TInner, TInner>))

    return outerEntries.selectMany(([outerKey, outer]) => innerEntries.where(([innerKey]) => equality(outerKey, innerKey)).select(([_, inner], index) => selectResult(outer, inner, index)))
  }

  last (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource> = predicateFn, context?: any): TSource | never {
    const { value, done } = this.where(predicate, context).takeLast(1)[Symbol.iterator]().next()

    if (done) {
      throw new RangeError('last of empty enumerable')
    }

    return value
  }

  lastOrDefault (this: IEnumerable<TSource>, element: TSource, predicate: PredicateFunction<TSource> = predicateFn, context?: any): TSource {
    return this.where(predicate, context).defaultIfEmpty(element).last()
  }

  max (this: IEnumerable<number>): number
  max (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, number>, context?: any): number
  max (this: IEnumerable<number> | IEnumerable<TSource>, select?: IndexedSelectFunction<TSource, number>, context?: any): number {
    const max: AggregateFunction<number, number> = (acc, value) => Math.max(acc, value)

    return select === undefined
      ? (this as IEnumerable<number>).aggregate(max, -Infinity)
      : (this as IEnumerable<TSource>).select(select, context).aggregate(max, -Infinity)
  }

  memoize (this: IEnumerable<TSource>): Enumerable<TSource> {
    const cache: TSource[] = []
    const iterator = this[Symbol.iterator]()

    return new Enumerable(function * (this: IEnumerable<TSource>, cache: TSource[], iterator: IterableIterator<TSource>) {
      for (let index = 0; ; index++) {
        if (index === cache.length) {
          const { value, done } = iterator.next()

          if (done) return

          cache[index] = value
        }

        yield cache[index]
      }
    }.bind(this, cache, iterator), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  min (this: IEnumerable<number>): number
  min (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, number>, context?: any): number
  min (this: IEnumerable<number> | IEnumerable<TSource>, select?: IndexedSelectFunction<TSource, number>, context?: any): number {
    const min: AggregateFunction<number, number> = (acc, value) => Math.min(acc, value)

    return select === undefined
      ? (this as IEnumerable<number>).aggregate(min, Infinity)
      : (this as IEnumerable<TSource>).select(select, context).aggregate(min, Infinity)
  }

  orderBy (this: IEnumerable<TSource>, compare: CompareFunction<TSource> = compareFn): IOrderedEnumerable<TSource> {
    return new Enumerable<TSource>(function * (this: IEnumerable<TSource>, compare: CompareFunction<TSource>) {
      yield * Array.from(this).sort(compare)
    }.bind(this, compare), compare) as IOrderedEnumerable<TSource>
  }

  orderByDescending (this: IEnumerable<TSource>, compare: CompareFunction<TSource> = compareFn): IOrderedEnumerable<TSource> {
    const compareDescending: CompareFunction<TSource> = (a: TSource, b: TSource) => -compare(a, b)

    return new Enumerable<TSource>(function * (this: IEnumerable<TSource>, compare: CompareFunction<TSource>) {
      yield * Array.from(this).sort(compare)
    }.bind(this, compareDescending), compareDescending) as IOrderedEnumerable<TSource>
  }

  prepend (this: IEnumerable<TSource>, element: TSource): Enumerable<TSource> {
    return new Enumerable(function * (this: IEnumerable<TSource>, element: TSource) {
      yield element
      yield * this
    }.bind(this, element))
  }

  static range (start: number, count: number): Enumerable<number> | never {
    if (count < 0) {
      throw new RangeError('count is less than 0')
    }

    if (start + count >= Number.MAX_SAFE_INTEGER) {
      throw new RangeError('start + count is greater than or equal to Number.MAX_SAFE_INTEGER')
    }

    return new Enumerable(function * () {
      for (let index = 0; index < count; index++) {
        yield index + start
      }
    })
  }

  static repeat<TSource> (element: TSource, count: number): Enumerable<TSource> {
    return new Enumerable(function * () {
      for (let index = 0; index < count; index++) {
        yield element
      }
    })
  }

  reverse (this: IEnumerable<TSource>): Enumerable<TSource> {
    return new Enumerable(function * (this: IEnumerable<TSource>) {
      yield * Array.from(this).reverse()
    }.bind(this), Enumerable.isEnumerable(this) && this.compare ? (a, b) => -(this as IOrderedEnumerable<TSource>).compare(a, b) : undefined)
  }

  select<TResult> (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, TResult>, context?: any): Enumerable<TResult> {
    return new Enumerable(function * (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, TResult>, context: any) {
      let index = 0

      for (const value of this) {
        yield select.call(context, value, index++, this)
      }
    }.bind(this, select, context))
  }

  selectMany<TCollection> (this: IEnumerable<TSource>, select: IndexedSelectManyFunction<TSource, TCollection>, context?: any): Enumerable<TCollection> {
    return new Enumerable(function * (this: IEnumerable<TSource>, select: IndexedSelectManyFunction<TSource, TCollection>, context: any) {
      let index = 0

      for (const value of this) {
        yield * select.call(context, value, index++, this)
      }
    }.bind(this, select, context))
  }

  sequenceEqual (this: IEnumerable<TSource>, second: IEnumerable<TSource>, equality: EqualityFunction<TSource> = equalityFn): boolean {
    const iterator1 = this[Symbol.iterator]()
    const iterator2 = second[Symbol.iterator]()
    let { value: value1, done: done1 } = iterator1.next()
    let { value: value2, done: done2 } = iterator2.next()

    for (; !done1 || !done2; { value: value1, done: done1 } = iterator1.next(), { value: value2, done: done2 } = iterator2.next()) {
      if (done1 || done2 || !equality(value1, value2)) {
        return false
      }
    }

    return true
  }

  single (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource> = predicateFn, context?: any): TSource | never {
    const iterator = this.where(predicate, context)[Symbol.iterator]()
    const { value, done: empty } = iterator.next()
    const { done: unit } = iterator.next()

    if (empty) {
      throw new TypeError('single of empty enumerable')
    }

    if (!unit) {
      throw new TypeError('single of non-unit enumerable')
    }

    return value
  }

  singleOrDefault (this: IEnumerable<TSource>, element: TSource, predicate: PredicateFunction<TSource> = predicateFn, context?: any): TSource | never {
    return this.where(predicate, context).defaultIfEmpty(element).single()
  }

  skip (this: IEnumerable<TSource>, count: number): Enumerable<TSource> {
    if (Array.isArray(this)) {
      return new Enumerable(function * (this: TSource[], count: number) {
        for (let index = count; index < this.length; index++) {
          yield this[index]
        }
      }.bind(this, count))
    }

    return this.where((_, index) => index >= count)
  }

  skipLast (this: IEnumerable<TSource>, count: number): Enumerable<TSource> {
    if (Array.isArray(this)) {
      return new Enumerable(function * (this: TSource[], count: number) {
        for (let index = 0; index < this.length - count; index++) {
          yield this[index]
        }
      }.bind(this, count))
    }

    return new Enumerable(function * (this: IEnumerable<TSource>, count: number) {
      const queue: TSource[] = []

      for (const value of this) {
        queue.push(value)

        if (queue.length > count) {
          yield queue.shift()
        }
      }
    }.bind(this, count), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  skipWhile (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): Enumerable<TSource> {
    return new Enumerable(function * (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context: any) {
      let condition = false

      yield * this.where((value, index, source) => condition || (condition = !predicate.call(context, value, index, source)))
    }.bind(this, predicate, context), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  sum (this: IEnumerable<number>): number
  sum (this: IEnumerable<TSource>, select: IndexedSelectFunction<TSource, number>, context?: any): number
  sum (this: IEnumerable<number> | IEnumerable<TSource>, select?: IndexedSelectFunction<TSource, number>, context?: any): number {
    const sum: AggregateFunction<number, number> = (acc, value) => acc + value

    return select === undefined
      ? (this as IEnumerable<number>).aggregate(sum, 0)
      : (this as IEnumerable<TSource>).select(select, context).aggregate(sum, 0)
  }

  take (this: IEnumerable<TSource>, count: number): Enumerable<TSource> {
    return new Enumerable(function * (this: IEnumerable<TSource>, count: number) {
      let index = 0

      for (const value of this) {
        if (index++ >= count) {
          return
        }

        yield value
      }
    }.bind(this, count), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  takeLast (this: IEnumerable<TSource>, count: number): Enumerable<TSource> {
    if (Array.isArray(this)) {
      return new Enumerable(function * (this: TSource[], count: number) {
        for (let index = Math.max(this.length - count, 0); index < this.length; index++) {
          yield this[index]
        }
      }.bind(this, count))
    }

    return new Enumerable(function * (this: IEnumerable<TSource>, count: number) {
      const queue: TSource[] = []

      for (const value of this) {
        queue.push(value)

        if (queue.length > count) {
          queue.shift()
        }
      }

      yield * queue
    }.bind(this, count), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  takeWhile (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): Enumerable<TSource> {
    return new Enumerable(function * (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context: any) {
      let condition = true

      yield * this.where((value, index, source) => condition || (condition = predicate.call(context, value, index, source)))
    }.bind(this, predicate, context), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  thenBy (this: IOrderedEnumerable<TSource>, compare: CompareFunction<TSource>): IOrderedEnumerable<TSource> {
    return new Enumerable(function * (this: IOrderedEnumerable<TSource>, compare: CompareFunction<TSource>) {
      const iterator = this[Symbol.iterator]()
      let { value, done } = iterator.next()

      while (!done) {
        const array: TSource[] = [value]

        for ({ value, done } = iterator.next(); !done && !this.compare(array[array.length - 1], value); { value, done } = iterator.next()) {
          array.push(value)
        }

        yield * array.sort(compare)
      }
    }.bind(this, this.compare, compare), (a, b) => this.compare(a, b) || compare(a, b)) as IOrderedEnumerable<TSource>
  }

  thenByDescending (this: IOrderedEnumerable<TSource>, compare: CompareFunction<TSource>): IOrderedEnumerable<TSource> {
    const compareDescending: CompareFunction<TSource> = (a: TSource, b: TSource) => -compare(a, b)

    return new Enumerable(function * (this: IOrderedEnumerable<TSource>, compare: CompareFunction<TSource>) {
      const iterator = this[Symbol.iterator]()
      let { value, done } = iterator.next()

      while (!done) {
        const array: TSource[] = [value]

        for ({ value, done } = iterator.next(); !done && !this.compare(array[array.length - 1], value); { value, done } = iterator.next()) {
          array.push(value)
        }

        yield * array.sort(compare)
      }
    }.bind(this, compareDescending), (a, b) => this.compare(a, b) || compareDescending(a, b)) as IOrderedEnumerable<TSource>
  }

  toArray (this: IEnumerable<TSource>): TSource[] {
    return Array.isArray(this)
      ? this
      : Array.from(this)
  }

  toJSON (this: IEnumerable<TSource>): IEnumerable<TSource> {
    return Enumerable.isEnumerable(this)
      ? Array.from(this)
      : this
  }

  toMap<TKey> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>): Map<TKey, TSource>
  toMap<TKey, TValue> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectValue: IndexedSelectFunction<TSource, TValue>): Map<TKey, TValue>
  toMap<TKey, TValue> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectValue?: IndexedSelectFunction<TSource, TValue>): Map<TKey, TSource> | Map<TKey, TValue> {
    return selectValue === undefined
      ? new Map<TKey, TSource>(this.select(selectEntry(selectKey, selectFn as SelectFunction<TSource, TSource>)))
      : new Map<TKey, TValue>(this.select(selectEntry(selectKey, selectValue)))
  }

  toSet (this: IEnumerable<TSource>): Set<TSource> {
    return this instanceof Set
      ? this
      : new Set(this)
  }

  toLookup<TKey> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>): Map<TKey, Set<TSource>>
  toLookup<TKey, TValue> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectValue: IndexedSelectFunction<TSource, TValue>): Map<TKey, Set<TValue>>
  toLookup<TKey, TValue> (this: IEnumerable<TSource>, selectKey: IndexedSelectFunction<TSource, TKey>, selectValue?: IndexedSelectFunction<TSource, TValue>): Map<TKey, Set<TSource>> | Map<TKey, Set<TValue>> {
    return selectValue === undefined
      ? this.select(selectEntry(selectKey, selectFn as SelectFunction<TSource, TSource>)).aggregate(aggregateGroup as AggregateFunction<[TKey, TSource], Map<TKey, Set<TSource>>>, new Map<TKey, Set<TSource>>())
      : this.select(selectEntry(selectKey, selectValue)).aggregate(aggregateGroup as AggregateFunction<[TKey, TValue], Map<TKey, Set<TValue>>>, new Map<TKey, Set<TValue>>())
  }

  union (this: IEnumerable<TSource>, second: IEnumerable<TSource>, equality: EqualityFunction<TSource> = equalityFn): Enumerable<TSource> {
    return new Enumerable<TSource>(function * (this: IEnumerable<TSource>, second: IEnumerable<TSource>) {
      yield * this
      yield * second
    }.bind(this, second)).distinct(equality)
  }

  where (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context?: any): Enumerable<TSource> {
    if (predicate === predicateFn) {
      return this.asEnumerable()
    }

    return new Enumerable(function * (this: IEnumerable<TSource>, predicate: PredicateFunction<TSource>, context: any) {
      let index = 0

      for (const value of this) {
        if (predicate.call(context, value, index++, this)) {
          yield value
        }
      }
    }.bind(this, predicate, context), Enumerable.isEnumerable(this) ? this.compare : undefined)
  }

  zip<TSecond> (this: IEnumerable<TSource>, second: IEnumerable<TSecond>): Enumerable<[TSource, TSecond]>
  zip<TSecond, TResult> (this: IEnumerable<TSource>, second: IEnumerable<TSecond>, result: ResultFunction<TSource, TSecond, TResult>, context?: any): Enumerable<TResult>
  zip<TSecond, TResult> (this: IEnumerable<TSource>, second: IEnumerable<TSecond>, result: ResultFunction<TSource, TSecond, [TSource, TSecond]> | ResultFunction<TSource, TSecond, TResult> = resultFn, context?: any): Enumerable<[TSource, TSecond]> | Enumerable<TResult> {
    return new Enumerable(function * (this: IEnumerable<TSource>, second: IEnumerable<TSecond>, result: ResultFunction<TSource, TSecond, [TSource, TSecond]> | ResultFunction<TSource, TSecond, TResult>, context: any) {
      const iterator = second[Symbol.iterator]()
      let index = 0

      for (const value1 of this) {
        const { value: value2, done } = iterator.next()

        if (done) {
          return
        }

        yield result.call(context, value1, value2, index++)
      }
    }.bind(this, second, result, context)) as Enumerable<[TSource, TSecond]> | Enumerable<TResult>
  }
}

export class Grouping<TKey, TSource> extends Enumerable<TSource> {
  readonly key: TKey

  constructor (iteratorFn: () => IterableIterator<TSource>, key: TKey)
  constructor (iteratorFn: () => IterableIterator<TSource>, compare: undefined | CompareFunction<TSource>, key: TKey)
  constructor (iteratorFn: () => IterableIterator<TSource>, compare: undefined | TKey | CompareFunction<TSource>, key?: TKey) {
    if (arguments.length < 3) {
      key = compare as TKey
      compare = undefined
    }

    super(iteratorFn, compare as undefined | CompareFunction<TSource>)

    this.key = key as TKey
  }
}
