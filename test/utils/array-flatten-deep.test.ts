/**
 * @description 数组深度扁平化 test
 * @author tangc1
 * @date 2022-04-20 21:50:19
*/

import { flattenDeep1, flattenDeep2 } from "../../src/utils/array-flatten-deep";

describe('数组扁平化', () => {
    it('空数组', () => {
        const res = flattenDeep2([])
        expect(res).toEqual([])
    })

    it('非嵌套数组', () => {
        const res = flattenDeep2([1, 2, 3, 4, 5])
        expect(res).toEqual([1, 2, 3, 4, 5])
    })

    it('一级嵌套数组', () => {
        const res = flattenDeep2([1, [2, 3, 4], 5])
        expect(res).toEqual([1, 2, 3, 4, 5])
    })

    it('多级嵌套数组', () => {
        const res = flattenDeep2([1, [2, [3], 4], 5])
        expect(res).toEqual([1, 2, 3, 4, 5])
    })
})