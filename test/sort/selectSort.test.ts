/**
 * @description 选择排序 test case
 * @author tangc1
 * @date 2022-06-01 17:33:41
*/

import { selectSort } from "../../src/sort/selectSort";

describe('selectSort test', () => {
    it('空数组', () => {
        expect(selectSort([])).toEqual([])
    })
    it('正常排序', () => {
        expect(selectSort([9, 5, 8, 7, 5, 4, 3, 1, 1])).toEqual([1, 1, 3, 4, 5, 5, 7, 8, 9])
    })
})