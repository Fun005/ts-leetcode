/**
 * @description 斐波那契数列 test
 * @author tangc1
 * @date 2022-05-03 17:15:54
*/

import { fibonacci } from "../../src/leetcode/fibonacci";

describe('斐波那契数列', () => {
    it('0 and 1', () => {
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
    })

    it('n < 0', () => {
        expect(fibonacci(-10)).toBe(0)
    })

    it('n > 1', () => {
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)
        expect(fibonacci(6)).toBe(8)
    })
})