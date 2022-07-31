/**
 * 岛屿数量
 */
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

export function numberOfIslands(grid: string[][]): number {

    if (grid.length === 0) return 0

    let res = 0
    let m = grid.length
    let n = grid[0].length

    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') return

        grid[i][j] = '0'
        dfs(i, j + 1)
        dfs(i, j - 1)
        dfs(i + 1, j)
        dfs(i - 1, j)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j)
                res++
            }
        }
    }

    return res
}
