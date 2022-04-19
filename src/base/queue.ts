/**
 * @description Definition for queue.
 * @author tangc1
 * @date 2022-04-19 19:00:29
 * param {Object}
 * return {Object}
*/
export class Queue {
    list: number[];
    head: number;
    length: number;

    constructor() {
        this.list = [];
        this.head = 0;
        this.length = 0;
    }

    /**
     * @description 入队操作
     * @param { number } elememt
     * @return { boolean }
     */
    enQueue(element: number): boolean {
        this.list.push(element);
        this.length++;
        return true
    }

    /**
     * @description 出队操作
     * @return { boolean }
    */
    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.head++;
        this.length--;
        return true;
    }

    /**
     * @description 返回队头元素
     * return { number|undefined } 
    */
    peek(): number | undefined {
        return this.list[this.head];
    }

    /**
     * @description 是否为空
     * @return { boolean }
    */
    isEmpty(): boolean {
        return this.getLenth() === 0;
    }

    /**
     * @description 获取队列长度
     * return { number } 
    */
    getLenth(): number {
        return this.length;
    }

    /**
     * @description 转字符串输出
     * returns
    */
    toString(): string {
        let str = ''
        for (let i = 0; i < this.length; i++) {
            str = `${str}, ${this.list[this.head + i]}`;
        }
        return str.slice(2)
    }

    /**
     * @description 清空队列
     * param {Object} 
     * return {Object} 
    */
    clear(): void {
        this.list = [];
        this.head = 0;
        this.length = 0;
    }
}