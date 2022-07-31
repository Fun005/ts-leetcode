/**
 * @description leetcode1208 尽可能使字符串相等
 * @author tangc1
 * @date 2022-07-31 20:35:03
*/

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
export function equalSubstring1(s: string, t: string, maxCost: number): number {
    if (s == '' || t == '') return 0

    const len = s.length
    let left = 0, right = 0;
    let cost = 0, result = 0;

    // @ts-ignore
    const getCost = i => Math.abs(s[i].charCodeAt() - t[i].charCodeAt())

    while (right < len) {
        cost += getCost(right++)
        while (left <= right && cost > maxCost) {
            cost -= getCost(left++)
        }

        result = Math.max(result, right - left)
    }

    return result
}

export function equalSubstring2(s: string, t: string, maxCost: number): number {
    if (s == '' || t == '') return 0
    const len = s.length
    const diff = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        // @ts-ignore
        diff[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt())
    }

    let left = 0, right = 0, result = 0, cost = 0;

    while (right < len) {
        cost += diff[right++]

        while (cost > maxCost) {
            cost -= diff[left++]
        }

        result = Math.max(result, right - left)
    }

    return result
}