/**
 * @description 括号生成(medium)
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 1 <= n <= 8
 * @author tangc1
 * @date 2022-05-04 16:16:43
*/


export function generateParenthesis(n: number): string[] {
    if (n < 1 || n > 8) return []
    const res: string[] = []
    function dfs(left: number, right: number, str: string) {
        if (left === 0 && right === 0) {
            res.push(str)
            return
        }
        if (left > 0) {
            dfs(left - 1, right, str + '(')
        }
        if (right > left) {
            dfs(left, right - 1, str + ')')
        }
    }

    dfs(n, n, '')
    return res
}

// console.info(generateParenthesis(1));
// console.info(generateParenthesis(2));
// console.info(generateParenthesis(3));