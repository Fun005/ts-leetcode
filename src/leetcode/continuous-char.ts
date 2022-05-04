/**
 * @description 连续出现最多的字符和次数
 * @author tangc1
 * @date 2022-05-04 21:29:00
*/

interface IRes {
    char: string
    length: number
}

/**
 * @description 双指针法
 * param {string} 
 * return {Object} 
*/
export function findContinuousChar(str: string): IRes {
    const res: IRes = {
        char: '',
        length: 0
    }

    const length = str.length
    if (length === 0) return res

    let tempLength = 0
    for (let i = 0, j = 0; i < length; i++) {
        if (str[i] === str[j]) {
            tempLength++
        }
        if (str[i] !== str[j] || i === length - 1) {
            // 不相等，或者 i 到了末尾
            if (tempLength > res.length) {
                res.char = str[j]
                res.length = tempLength
            }
            tempLength = 0
            if (i < length - 1) {
                j = i // 让 j 追上 i
                i--
            }
        }
    }

    return res
}

// const str1 = 'aabccceeeeee1234'
// const str2 = 'abcdef'

// console.info(findContinuousChar(str1));
// console.info(findContinuousChar(str2));