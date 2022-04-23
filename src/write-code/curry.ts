/**
 * @description 函数柯里化
 * @author tangc1
 * @date 2022-04-23 13:20:27
*/
export function curry(fn: Function) {
    const fnArgsLength = fn.length // 函数的length就是函数参数长度(个数)
    let args: any[] = []

    function calc(this: any, ...newArgs: any[]) {
        // 累积参数
        args = [...args, ...newArgs]

        if (args.length < fnArgsLength) {
            // 参数不够 直接返回函数
            return calc
        } else {
            // 参数足够，返回执行结果
            return fn.apply(this, args.slice(0, fnArgsLength))
        }
    }
    return calc
}

// function add(a: number, b: number, c: number): number {
//     return a + b + c
// }

// console.info(add(10, 20, 30));

// const curryAdd = curry(add)
// console.info(curryAdd(10)(20)(30));