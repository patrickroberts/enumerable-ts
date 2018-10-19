# enumerable-ts

---

A port of System.Linq.Enumerable from the .NET framework to TypeScript, using a
unique and safe design pattern which directly exposes the Enumerable class as a
collection of polymorphic extension methods to all of the classes defined in the
core language specification that implement the iterable protocol.

## Why enumerable-ts?

---

enumerable-ts is designed to fulfill the same purpose as the IEnumerable
interface from C#. It provides a collection of extension methods to the built-in
classes that use deferred execution for declaring complex queries and iterating
large collections with efficient memory consumption.

This is possible through the use of generator functions. Generator functions
provide a way of expressing deferred execution consumed through the iterator
protocol. This allows complex queries to be constructed and iterated without
buffering intermediate copies of the entire underlying collection in memory.

## Usage

---

#### Installing

```bash
$ npm i --save enumerable-ts
```

#### ES2015

```js
import 'enumerable-ts'
```

#### CommonJS

```js
require('enumerable-ts')
```

# [Documentation](docs/)

## FAQ

---

#### Why are `concat()`, `join()`, and `reverse()` only on `Enumerable` and not on the `IEnumerable` interface?

In order to remain polymorphic, all the `IEnumerable` interface methods must be
forward-compatible with the methods on all of its implementing classes. Since
many of the built-in Iterables in JavaScript already implement these methods
with conflicting signatures, it's by design that these methods are only
available on instances of the concrete `Enumerable` class.

However, by using explicit calls to these methods on the `Enumerable` class like `Enumerable.prototype.concat.join(array, …)`, they can still be directly applied
to instances of the built-in classes without violating the principles of
polymorphism.

## Roadmap

---

- [ ] Documentation of usage with example code
- [x] Full port of core [`System.Linq.Enumerable`](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable) methods
- [ ] Full port of [MoreLINQ](https://github.com/morelinq/MoreLINQ) methods
- [x] Node.js support
- [ ] Browser support
- [ ] Require.js support
- [ ] Universal Module Definition
- [ ] Separate exports with and without global-modifying side-effects (similar to [`colors`](https://www.npmjs.com/package/colors#usage))

## Contributing

---

Do you have feature requests, bug reports, or ideas for improving this project? Please open new issues on the [github repository](https://github.com/patrickroberts/enumerable-ts) with details about your inquiry.

## License

---

Copyright © 2018 Patrick Roberts

MIT License
