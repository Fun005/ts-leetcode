/**
 * @description custom new test
 * @author tangc1
 * @date 2022-04-22 23:28:57
*/
import { customNew } from "../../src/write-code/new";

describe('custom new', () => {
    it('new test case', () => {
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

        const f = customNew<Foo>(Foo, 'zhangsan', 18, 'changsha')
        expect(f.name).toBe('zhangsan')
        expect(f.age).toBe(18)
        expect(f.city).toBe('changsha')
        expect(f.getName()).toBe('zhangsan')
    })
})