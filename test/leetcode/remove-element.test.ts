/**
 * @description removeElement test
 * @author tangc1
 * @date 2022-05-04 16:12:01
*/
import { removeElement } from "../../src/leetcode/remove-element";

describe('移除元素 test', () => {
    it('空数组', () => {
        expect(removeElement([], 2)).toBe(0)
    })
    it('val不存在', () => {
        expect(removeElement([1, 2, 2, 4], 5)).toBe(4)
    })
    it('正常情况', () => {
        expect(removeElement([3, 2, 2, 3], 3)).toBe(2)
        expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
    })
})