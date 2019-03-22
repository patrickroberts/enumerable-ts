# enumerable-ts

A port of System.Linq.Enumerable from the .NET framework to TypeScript, using a unique and safe design pattern which directly exposes the Enumerable class as a collection of polymorphic extension methods to all of the classes defined in the core language specification that implement the iterable protocol.

## Why enumerable-ts?

enumerable-ts is designed to fulfill the same purpose as the Enumerable class from C#. It provides a collection of extension methods to the built-in classes and uses deferred execution for declaring complex queries and iterating large collections with efficient memory consumption.

This is possible through the use of [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*). Generator functions provide a way of expressing deferred execution consumed through the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol). This allows complex queries to be constructed and iterated without buffering intermediate copies of the entire underlying collection in memory.

## Usage

#### Installing

```bash
$ npm i --save enumerable-ts
```

#### ES2015

```ts
import 'enumerable-ts'
```

#### CommonJS

```ts
require('enumerable-ts')
```

### Example

```ts
const array: (number | null)[] = [1, 2, 3, 4, null, 6, 7, 8, 9]
const sum = array
  .where(Boolean)
  .select(i => i * 2)
  .aggregate((sum, val) => sum + val, 0)

console.log(sum) // 80
```

Because of deferred execution, the original `array` is only iterated _once_ by `aggregate()`, which calls and consumes `this[Symbol.iterator]` to yield the sequence of non-null, doubled integers being summed.

### Array methods and their deferred counterparts

* `array.concat(…)` -> `enumerable.concat(…)`*
* `array.every(…)` -> `enumerable.all(…)`
* `array.filter(…)` -> `enumerable.where(…)`
* `array.find(…)` -> `enumerable.first(…)`
* `array.flatMap(…)` -> `enumerable.selectMany(…)`
* `array.map(…)` -> `enumerable.select(…)`
* `array.reduce(…)` -> `enumerable.aggregate(…)`
* `array.reduceRight(…)` -> `enumerable.aggregateRight(…)`
* `array.reverse()` -> `enumerable.reverse(…)`*
* `array.slice(begin)` -> `enumerable.skip(begin)`
* `array.slice(begin, end)` -> `enumerable.skip(begin).take(end - begin)`
* `array.some(…)` -> `enumerable.any(…)`
* `array.sort(…)` -> `enumerable.orderBy(…)`

<sup>* To call these methods on an array, use `array.toEnumerable().method(…)` or `Enumerable.prototype.method.call(array, …)`</sup>

On the left-hand side, the operation occurs immediately and returns the result. If the result is an array, the operation on the right-hand side is deferred and an `Enumerable` is returned, which will apply the operation when it is iterated implicitly using `for...of` or explicitly using `enumerable[Symbol.iterator]()`. If the result is a boolean, element, or accumulator, then the operation on the right-hand side still occurs immediately, but the method is available on `Enumerable.prototype`, while the left-hand side is not.

There are many more methods available on [`IEnumerable`](docs/IEnumerable.md).

# [Documentation](docs/)

## FAQ

#### Can I use this without TypeScript?

Yes, the module is [available on npm](https://www.npmjs.com/package/enumerable-ts) pre-transpiled to ECMAScript 2015. There is no plan to make this backwards-compatible, as the only way to modify a built-in prototype chain (`__proto__`) is platform-specific and not standardized within the ECMAScript 5 specification.

#### What built-in classes extend `Enumerable`?

`Array`, `TypedArray`, `String`, `Map`, and `Set`.

#### Why are `concat()`, `join()`, `reverse()`, and `toJSON()` only available on `Enumerable` and not on the `IEnumerable` interface?

In order to remain polymorphic, all the `IEnumerable` interface methods must be forward-compatible with the methods on each of its implementing classes. Since many of the built-in Iterables in JavaScript already implement these methods with conflicting signatures, it's by design that these methods are only available on instances of the concrete `Enumerable` class.

However, by using explicit calls to these methods on the `Enumerable` class like `Enumerable.prototype.concat.join(array, …)`, they can still be directly applied to instances of the built-in classes without violating the principles of polymorphism.

## Roadmap

- [ ] Documentation of usage with example code
- [x] Full port of core [`System.Linq.Enumerable`](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable) methods
- [ ] Full port of [MoreLINQ](https://github.com/morelinq/MoreLINQ) methods
- [x] Node.js support
- [ ] Browser support
- [ ] Require.js support
- [ ] Universal Module Definition
- [ ] Separate exports with and without global-modifying side-effects (similar to [`colors`](https://www.npmjs.com/package/colors#usage))

## Contributing

Do you have feature requests, bug reports, or ideas for improving this project? Please open new issues on the [github repository](https://github.com/patrickroberts/enumerable-ts) with details about your inquiry.

## License

Copyright © 2018 Patrick Roberts

MIT License
