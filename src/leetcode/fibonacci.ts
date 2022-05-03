/**
 * @description 斐波那契数列
 * @author tangc1
 * @date 2022-05-03 17:06:20
*/

/**
 * @description 复杂度O(2^n)
 * param {Object} 
 * return {Object} 
*/
// export function fibonacci(n: number): number {
//     if (n <= 0) return 0
//     if (n === 1) return 1
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

/**
 * @description 复杂度O(n)
 * param {Object} 
 * return {Object} 
*/
export function fibonacci(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1

    let n1 = 1 // 记录n-1的结果
    let n2 = 0 // 记录n-2的结果
    let res = 0
    for (let i = 2; i <= n; i++) {
        res = n1 + n2

        // 记录中间结果
        n2 = n1
        n1 = res
    }
    return res
}

// console.info(fibonacci(2));
// console.info(fibonacci(3));