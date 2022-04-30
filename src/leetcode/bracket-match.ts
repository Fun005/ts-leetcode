/**
 * @description 字符串括号匹配
 * @author tangc1
 * @date 2022-04-30 15:39:49
*/

function isMatch(left: string, right: string): boolean {
    if (left === '(' && right === ')') return true
    if (left === '[' && right === ']') return true
    if (left === '{' && right === '}') return true
    return false
}

/**
 * @description 
 * param {String} str
 * return {Boolean} boolean
*/
export function bracketMatch(str: string): boolean {
    const length = str.length
    if (length === 0) return true

    const leftSymbols = '([{'
    const rightSymbols = ')]}'
    let stack = []

    for (let i = 0; i < length; i++) {
        const s = str[i]
        if (leftSymbols.includes(s)) {
            // 左括号，入栈
            stack.push(s)
        }
        if (rightSymbols.includes(s)) {
            // 右括号，判断栈顶是否出栈
            const top = stack[stack.length - 1]
            if (isMatch(top, s)) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

// const str = '(e{r}[]])'
// console.info(bracketMatch1(str));