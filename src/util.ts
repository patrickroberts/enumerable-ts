export interface AggregateFunction<TSource, TResult> {
  (accumulator: TResult, value: TSource, index: number, source: IEnumerable<TSource>): TResult
}

export interface CompareFunction<TSource> {
  (a: TSource, b: TSource): number
}

export interface EqualityFunction<TSource> {
  (a: TSource, b: TSource): boolean
}

export interface PredicateFunction<TSource> {
  (value: TSource, index: number, source: IEnumerable<TSource>): boolean
}

export interface ResultFunction<TFirst, TSecond, TResult> {
  (first: TFirst, second: TSecond, index: number): TResult
}

export interface SelectFunction<TSource, TResult> {
  (value: TSource): TResult
}

export interface IndexedSelectFunction<TSource, TResult> {
  (value: TSource, index: number, source: IEnumerable<TSource>): TResult
}

export interface SelectManyFunction<TSource, TResult> {
  (value: TSource): IEnumerable<TResult>
}

export interface IndexedSelectManyFunction<TSource, TResult> {
  (value: TSource, index: number, source: IEnumerable<TSource>): IEnumerable<TResult>
}

export const selectFn = (value: any) => value
export const selectManyFn = (value: IEnumerable<any>) => value
export const resultFn = <TFirst, TSecond> (first: TFirst, second: TSecond): [TFirst, TSecond] => [first, second]
export const predicateFn = () => true
export const equalityFn = (a: any, b: any) => a === b || (a !== a && b !== b)
export const compareFn = (a: any, b: any) => -(a < b) || +(a > b)
export const generatorFn = function * (): IterableIterator<any> { return }

import { IEnumerable } from './enumerable'
