/**
 * @description curry test
 * @author tangc1
 * @date 2022-04-23 13:37:24
*/
import { curry } from '../../src/write-code/curry';

describe('curry test', () => {
    it('curry test case', () => {
        function add(a: number, b: number, c: number): number {
            return a + b + c
        }
        const curryAdd = curry(add)
        expect(curryAdd(10)(20)(30)).toEqual(add(10, 20, 30))
    })
})