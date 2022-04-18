import { quickSort } from "../../src/sort/quickSort";

describe('快速排序', () => {
    test('test case =[3,1,2,6,4]', () => {
        const arr = [3, 1, 2, 6, 4]
        expect(quickSort(arr)).toEqual([1, 2, 3, 4, 6])
    })
})