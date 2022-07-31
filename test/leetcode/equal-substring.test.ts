/**
 * @description leetcode1208 尽可能使字符串相等 test case
 * @author tangc1
 * @date 2022-07-31 20:35:03
*/

import { equalSubstring1, equalSubstring2 } from '../../src/leetcode/equal-substring'

describe('尽可能使字符串相等', () => {
    it('params not right', () => {
        expect(equalSubstring1('', '', 1)).toBe(0)
        expect(equalSubstring2('', '', 1)).toBe(0)
    })

    it('"abcd", "bcdf", 3', () => {
        expect(equalSubstring1("abcd", "bcdf", 3)).toBe(3)
        expect(equalSubstring2("abcd", "bcdf", 3)).toBe(3)
    })

    it('"abcd", "cdef", 3', () => {
        expect(equalSubstring1("abcd", "cdef", 3)).toBe(1)
        expect(equalSubstring2("abcd", "cdef", 3)).toBe(1)
    })

    it('"abcd", "acde", 0', () => {
        expect(equalSubstring1("abcd", "acde", 0)).toBe(1)
        expect(equalSubstring2("abcd", "acde", 0)).toBe(1)
    })
})