/**
 * @description 数组扁平化 test
 * @author tangc1
 * @date 2022-04-20 21:35:38
*/

import { flatten1, flatten2 } from "../../src/utils/array-flatten";

describe('数组扁平化', () => {
    it('空数组', () => {
        const res = flatten2([])
        expect(res).toEqual([])
    })

    it('非嵌套数组', () => {
        const res = flatten2([1, 2, 3, 4, 5])
        expect(res).toEqual([1, 2, 3, 4, 5])
    })

    it('一级嵌套数组', () => {
        const res = flatten2([1, [2, 3, 4], 5])
        expect(res).toEqual([1, 2, 3, 4, 5])
    })

    it('多级嵌套数组', () => {
        const res = flatten2([1, [2, [3], 4], 5])
        expect(res).toEqual([1, 2, [3], 4, 5])
    })
})