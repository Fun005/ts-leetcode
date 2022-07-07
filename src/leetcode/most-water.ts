/**
 * @description 盛水最多的容器
 * @author tangc1
 * @date 2022-07-01 16:07:45
*/

/**给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。画 n 条垂直线，使得垂直线 i 的两个
 * 端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 你不能倾斜容器，n 至少是2。
 */

/**
 * 双指针法
 * 从头和尾开始
 * 谁小谁向中间挪动
 * 记录过程中盛水的最大值
 */

/**
 * param { number[] } heightArr 
 * return { number }
*/

export function maxArea(heightArr: number[]): number {
    let result = 0
    if (heightArr.length === 0) return result
    let i = 0
    let j = heightArr.length - 1

    while (i !== j) {
        let left_height = heightArr[i]
        let right_height = heightArr[j]
        let h = Math.min(left_height, right_height)

        result = Math.max(result, h * (j - i))

        left_height > right_height ? j-- : i++
    }

    return result
}

// const arr1 = [1, 2, 3, 2, 1]
// const arr2 = [5, 2, 5, 2, 1]

// console.info(maxArea(arr1));
// console.info(maxArea(arr2));