/**
 * @description 移除元素 (easy)
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * @author tangc1
 * @date 2022-05-04 16:06:27
*/

/**
 * param { array } nums
 * param { number } val
 * return { number } result
*/
export function removeElement(nums: number[], val: number): number {
    if (!nums || nums.length === 0) return 0
    let times = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[times++] = nums[i]
        }
    }
    return times
}

// console.info(removeElement([3, 2, 2, 3], 3)); // 2, nums = [2,2]
// console.info(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, nums = [0,1,4,0,3]
// console.info(removeElement([1, 2, 2, 4], 5)); // 4, nums = [1, 2, 2, 4]