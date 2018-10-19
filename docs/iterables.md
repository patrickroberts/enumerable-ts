# Documentation

* [Callbacks](callbacks.md)
* [`Enumerable<TSource>`](Enumerable.md)
* [`EnumerableConstructor`](EnumerableConstructor.md)
* [`Grouping<TKey, TSource>`](Grouping.md)
* [`GroupingConstructor`](GroupingConstructor.md)
* [`IEnumerable<TSource>`](IEnumerable.md)
* [`IGrouping<TKey, TSource>`](IGrouping.md)
* [`IOrderedEnumerable<TSource>`](IOrderedEnumerable.md)
* Built-in Iterables

## Built-in Iterables

```ts
interface Array<T> extends IEnumerable<T> { }
interface Map<K, V> extends IEnumerable<[K, V]> { }
interface Set<T> extends IEnumerable<T> { }
interface String extends IEnumerable<string> { }
interface TypedArray extends IEnumerable<number> { }

interface ArrayConstructor extends EnumerableConstructor { }
interface MapConstructor extends EnumerableConstructor { }
interface TypedArrayConstructor extends EnumerableConstructor { }
interface SetConstructor extends EnumerableConstructor { }
interface StringConstructor extends EnumerableConstructor { }

interface Float32Array extends TypedArray { }
interface Float64Array extends TypedArray { }
interface Int16Array extends TypedArray { }
interface Int32Array extends TypedArray { }
interface Int8Array extends TypedArray { }
interface Uint16Array extends TypedArray { }
interface Uint32Array extends TypedArray { }
interface Uint8Array extends TypedArray { }
interface Uint8ClampedArray extends TypedArray { }

interface Float32ArrayConstructor extends TypedArrayConstructor { }
interface Float64ArrayConstructor extends TypedArrayConstructor { }
interface Int16ArrayConstructor extends TypedArrayConstructor { }
interface Int32ArrayConstructor extends TypedArrayConstructor { }
interface Int8ArrayConstructor extends TypedArrayConstructor { }
interface Uint16ArrayConstructor extends TypedArrayConstructor { }
interface Uint32ArrayConstructor extends TypedArrayConstructor { }
interface Uint8ArrayConstructor extends TypedArrayConstructor { }
interface Uint8ClampedArrayConstructor extends TypedArrayConstructor { }
```
