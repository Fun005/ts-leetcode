/**
 * @description 插入排序 test case
 * @author tangc1
 * @date 2022-06-06 10:46:16
*/

import { insertSort } from "../../src/sort/insertSort";

describe('selecinsertSorttSort test', () => {
    it('空数组', () => {
        expect(insertSort([])).toEqual([])
    })
    it('正常排序', () => {
        expect(insertSort([9, 5, 8, 7, 5, 4, 3, 1, 1])).toEqual([1, 1, 3, 4, 5, 5, 7, 8, 9])
    })
})