/**
 * @description custom bind test
 * @author tangc1
 * @date 2022-04-23 15:30:47
*/
import '../../src/write-code/bind'

describe('custom bind', () => {
    it('band this', () => {
        function fn(this: any) { return this }
        // @ts-ignore
        const fn1 = fn.customBind({ x: 100 })
        expect(fn1()).toEqual({ x: 100 })
    })
    it('bind args', () => {
        function fn(a: any, b: any, c: any) { return a + b + c }
        // @ts-ignore
        const fn1 = fn.customBind(null, 10, 20)
        expect(fn1(30)).toBe(60)
    })
})