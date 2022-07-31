/**
 * @description 岛屿数量test case
 * @author tangc1
 * @date 2022-07-31 16:06:18
*/

import { numberOfIslands } from '../../src/leetcode/number-of-islands'

describe('number-of-island test case', () => {
    it('empty', () => {
        expect(numberOfIslands([])).toBe(0)
    })

    it('right', () => {
        const grid1 = [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ]

        const grid2 = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ]

        expect(numberOfIslands(grid1)).toBe(1)
        expect(numberOfIslands(grid2)).toBe(3)
    })
})