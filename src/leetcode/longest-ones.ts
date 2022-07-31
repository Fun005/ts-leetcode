/**
 * @description leetcode1004-最大连续1的个数3⃣️
 * @author tangc1
 * @date 2022-07-31 20:59:12
*/

export function longestOnes(nums: number[], k: number): number {
    const len = nums.length
    if (len == 0 || k < 0) return 0

    let left = 0, right = 0, zeroNum = 0, result = 0;

    while (right < len) {
        if (nums[right++] === 0) {
            zeroNum++
        }

        while (zeroNum > k) {
            if (nums[left++] === 0) {
                zeroNum--
            }
        }

        result = Math.max(result, right - left)
    }

    return result
}