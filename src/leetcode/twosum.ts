/**
 * 两数之和(时间复杂度0(N^2))
 * @param { number[] } nums
 * @param { number } target
 * @returns { number[] | undefined }
 */
export function twoSum1(nums: number[], target: number): number[] | undefined {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

/**
 * O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[] | undefined}
 */
export function twoSum2(nums: number[], target: number): number[] | undefined {
    const map: any = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
}

// // const arr = [1, 3, 5, 2, 6, 8, 7, 9]
// const arr = [1, 2, 4, 3, 5, 8, 7, 9]
// const target = 15
// console.info(twoSum1(arr, target));
// console.info(twoSum2(arr, target));