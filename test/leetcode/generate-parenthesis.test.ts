/**
 * @description 括号生成 test
 * @author tangc1
 * @date 2022-05-04 16:57:31
*/
import { generateParenthesis } from "../../src/leetcode/generate-parenthesis";

describe('括号生成 test', () => {
    it('n不符合要求', () => {
        expect(generateParenthesis(-1)).toEqual([])
        expect(generateParenthesis(0)).toEqual([])
        expect(generateParenthesis(9)).toEqual([])
    })
    it('正常情况', () => {
        expect(generateParenthesis(1)).toEqual(['()'])
        expect(generateParenthesis(2)).toEqual(['(())', '()()'])
        expect(generateParenthesis(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"])
    })
})