/**
 * @description instanceof
 * @author tangc1
 * @date 2022-04-23 14:38:54
*/

export function myInstanceof(instance: any, origin: any): boolean {
    if (instance == null) return false // null undefined

    const type = typeof instance
    // 值类型
    if (type !== 'object' && type !== 'function') return false

    let tempInstance = instance // 防止修改instance
    while (tempInstance) {
        if (tempInstance.__proto__ === origin.prototype) {
            // 匹配上
            return true
        }
        tempInstance = tempInstance.__proto__ // 顺着原型链往上找
    }
    return false
}


console.info(myInstanceof({}, Object));
console.info(myInstanceof([], Object));
console.info(myInstanceof([], Array));
console.info(myInstanceof('abc', String));