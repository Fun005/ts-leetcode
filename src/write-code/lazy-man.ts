/**
 * @description lazy man
 * @author tangc1
 * @date 2022-04-23 12:47:03
*/
class LazyMan {
    private name: string
    private tasks: Function[] = [] // 任务列表

    constructor(name: string) {
        this.name = name

        setTimeout(() => {
            this.next()
        });
    }

    private next() {
        const task = this.tasks.shift() // 取出第一个task
        if (task) task()
    }

    eat(foot: string) {
        const task = () => {
            console.info(`${this.name} eat ${foot}`);
            this.next() // 立即执行下一个任务
        }
        this.tasks.push(task)
        return this // 链式调用
    }

    sleep(second: number) {
        const task = () => {
            setTimeout(() => {
                console.info(`${this.name} sleep ${second}秒`);
                this.next() // second秒之后执行下一个任务
            }, second * 1000);
        }
        this.tasks.push(task)
        return this // 链式调用
    }
}

const me = new LazyMan('zhangsan')
me.eat('apple').eat('banana').sleep(2).eat('rice')