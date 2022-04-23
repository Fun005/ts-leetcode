/**
 * @description myInstanceof test
 * @author tangc1
 * @date 2022-04-23 14:46:47
*/
import { myInstanceof } from "../../src/write-code/instanceof";

describe('instanceof test', () => {
    it('null undefined', () => {
        expect(myInstanceof(null, Object)).toBe(false)
        expect(myInstanceof(undefined, Object)).toBe(false)
    })
    it('number string', () => {
        expect(myInstanceof(123, Object)).toBe(false)
        expect(myInstanceof('abc', Object)).toBe(false)
    })
    it('object', () => {
        expect(myInstanceof({}, Object)).toBe(true)
        expect(myInstanceof({}, Array)).toBe(false)
    })
    it('array', () => {
        expect(myInstanceof([123], Object)).toBe(true)
        expect(myInstanceof([123], Array)).toBe(true)
    })
    it('function', () => {
        function fn() { }
        expect(myInstanceof(fn, Function)).toBe(true)
        expect(myInstanceof(fn, Object)).toBe(true)
    })
    it('custom', () => {
        class Foo { }
        const f = new Foo()
        expect(myInstanceof(f, Foo)).toBe(true)
        expect(myInstanceof(f, Object)).toBe(true)
    })
})