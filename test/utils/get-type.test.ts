/**
 * 判断类型 test
 */
import { getType } from "../../src/utils/get-type";

describe('类型测试', () => {
    it('字符串', () => {
        expect(getType('')).toBe('string')
    })
    it('数字', () => {
        expect(getType(123)).toBe('number')
    })
    it('对象', () => {
        expect(getType({})).toBe('object')
    })
    it('数组', () => {
        expect(getType([1, 2, 3])).toBe('array')
    })
    it('null', () => {
        expect(getType(null)).toBe('null')
    })
    it('undefined', () => {
        expect(getType(undefined)).toBe('undefined')
    })
    it('symbol', () => {
        expect(getType(Symbol())).toBe('symbol')
    })
    it('map', () => {
        expect(getType(new Map())).toBe('map')
    })
    it('weakmap', () => {
        expect(getType(new WeakMap())).toBe('weakmap')
    })
    it('set', () => {
        expect(getType(new Set())).toBe('set')
    })
    it('weakset', () => {
        expect(getType(new WeakSet())).toBe('weakset')
    })
    it('date', () => {
        expect(getType(new Date())).toBe('date')
    })
    it('bigint', () => {
        expect(getType(BigInt(100))).toBe('bigint')
    })
    it('regexp', () => {
        expect(getType(new RegExp(''))).toBe('regexp')
    })
    it('promise', () => {
        expect(getType(Promise.resolve())).toBe('promise')
    })
    it('error', () => {
        expect(getType(new Error())).toBe('error')
    })
    it('function', () => {
        expect(getType(() => { })).toBe('function')
        expect(getType(class Foo { })).toBe('function')
    })
})