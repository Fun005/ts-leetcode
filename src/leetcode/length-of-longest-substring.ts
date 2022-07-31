/**
 * @description 无重复字符的最长子串：给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @author tangc1
 * @date 2022-07-01 17:12:29
*/

// 数组
export function lengthOfLongestSubstring1(str: string): number {
    let res = 0
    let temp: string[] = []
    for (let i = 0; i < str.length; i++) {
        if (temp.indexOf(str[i]) === -1) {
            // 数组中没有这个数，推入数组
            temp.push(str[i])
        } else {
            // 数组中存在这个数，说明重复
            temp.shift() // 推出重复值（第一个）
            i-- // i需要回退
            continue
        }
        res = Math.max(res, temp.length)
    }

    return res
}

// set 滑动窗口
export function lengthOfLongestSubstring2(str: string): number {
    const set = new Set() //判断滑动窗口内是否有重复元素
    let i = 0 //滑动窗口右边界
    let j = 0 //滑动窗口左边界
    let maxLength = 0

    if (str.length === 0) return 0

    for (i; i < str.length; i++) {
        if (set.has(str[i])) {
            //set中有重复元素不断让j++ 并删除窗口之外的元素 直到滑动窗口内没有重复的元素
            while (set.has(str[i])) {
                set.delete(str[j])
                j++
            }
            set.add(str[i])
        } else {
            //当前元素不在set中 就加入set 然后更新最大长度，i++继续下一轮循环
            set.add(str[i])
            maxLength = Math.max(maxLength, set.size)
        }
    }
    return maxLength
}