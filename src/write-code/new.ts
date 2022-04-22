/**
 * @description 实现一个new方法
 * @author tangc1
 * @date 2022-04-21 21:05:52
*/

export function customNew<T>(constructor: Function, ...args: any[]): T {
    // 1. 创建一个空对象，继承constructor的原型
    const obj = Object.create(constructor.prototype)
    // 2. 将obj作为this，执行constructor，并传入参数
    constructor.apply(obj, args);
    // 3. 返回obj
    return obj
}

class Foo {
    name: string
    age: number
    city: string
    constructor(name: string, age: number, city: string) {
        this.name = name
        this.age = age
        this.city = city
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getCity() {
        return this.city
    }
}
// const f = new Foo('zhangsan', 18, 'changsha')
const f = customNew<Foo>(Foo, 'zhangsan', 18, 'changsha')
console.info(typeof f);
console.info(typeof Foo);
console.info(f);
console.info(f.getCity());