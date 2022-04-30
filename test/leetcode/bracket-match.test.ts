/**
 * @description 字符串括号匹配 test
 * @author tangc1
 * @date 2022-04-30 19:47:50
*/

import { bracketMatch } from "../../src/leetcode/bracket-match";

describe('字符串括号匹配', () => {
    it('正常情况', () => {
        const str = 'a(b{c[d]e}f)g'
        expect(bracketMatch(str)).toBe(true)
    })
    it('空字符串', () => {
        const str = ''
        expect(bracketMatch(str)).toBe(true)
    })
    it('不匹配', () => {
        const str = 'a(b{c[d]e}f)g]'
        expect(bracketMatch(str)).toBe(false)
    })
})