/**
 * @description custom bind
 * @author tangc1
 * @date 2022-04-23 15:24:41
*/
// @ts-ignore
Function.prototype.customBind = function (context: any, ...bindArgs: any[]) {
    // context 就是传入的this
    // bindArgs 就是传入的参数
    const self = this // 当前函数本身

    return function (...args: []) {
        const newArgs = bindArgs.concat(args)
        return self.apply(context, newArgs)
    }
}

function fn(this: any, a: any, b: any, c: any) {
    console.info(this, a, b, c);
}

// // @ts-ignore
// const f1 = fn.customBind({ x: 100 }, 10)
// console.info(f1());
// console.info(f1(20));
// console.info(f1(20, 30));