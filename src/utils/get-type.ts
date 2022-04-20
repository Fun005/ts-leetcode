/**
 * @description 获取数据类型
 * @author tangc1
 * @date 2022-04-20 21:55:20
*/

export function getType(x: any): string {
    const originType = Object.prototype.toString.call(x)
    const spaceIndex = originType.indexOf(' ')
    const type = originType.slice(spaceIndex + 1, -1)
    return type.toLowerCase()
}

console.info(getType({}));
console.info(getType([]));
console.info(getType(1));
console.info(getType('xxx'));
console.info(getType(true));
console.info(getType(null));
console.info(getType(undefined));
console.info(getType(new Map()));
console.info(getType(new Set()));
console.info(getType(Symbol()));
console.info(getType(new Date()));
// console.info(getType(new RegExp(/?/)));