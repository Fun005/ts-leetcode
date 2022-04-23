/**
 * @description eventBus
 * @author tangc1
 * @date 2022-04-23 15:54:41
*/

// 通过isOnce区分on和once事件
export class EventBus1 {
    /**
     * {
     *     'key1':[
     *          { fn: fn1, isOnce: false },
     *          { fn: fn2, isOnce: false },
     *          { fn: fn3, isOnce: true }
     *      ],
     *     'key2':[],
     *     'key3':[]
     * }
     */

    private events: {
        [key: string]: Array<{ fn: Function, isOnce: boolean }>
    }
    constructor() {
        this.events = {}
    }

    on(type: string, fn: Function, isOnce: boolean = false) {
        if (this.events[type] == null) {
            this.events[type] = [] // 初始化 key 的 fn 数组
        }
        this.events[type].push({ fn, isOnce })
    }

    once(type: string, fn: Function) {
        this.on(type, fn, true)
    }

    off(type: string, fn?: Function) {
        if (fn) {
            const fnList = this.events[type]
            // 解绑某一个fn
            if (fnList) {
                this.events[type] = fnList.filter(item => item.fn !== fn)
            }
        } else {
            // 解绑全部
            this.events[type] = []
        }
    }

    emit(type: string, ...args: any[]) {
        const fnList = this.events[type]
        if (fnList == null) return

        // 这里用fitter不用forEach, 是因为要过滤once
        this.events[type] = fnList.filter(item => {
            const { fn, isOnce } = item
            fn(...args)

            // once执行一次就要过滤掉
            if (!isOnce) return true
            return false
        })

    }
}

// 分开储存on和once事件
export class EventBus2 {
    private events: { [key: string]: Array<Function> } // { key1: [fn1,fn2,...], key2: [...]}
    private onceEvents: { [key: string]: Array<Function> }

    constructor() {
        this.events = {}
        this.onceEvents = {}
    }

    on(type: string, fn: Function) {
        if (!this.events[type]) this.events[type] = []
        this.events[type].push(fn)
    }

    once(type: string, fn: Function) {
        if (!this.onceEvents[type]) this.onceEvents[type] = []
        this.onceEvents[type].push(fn)
    }

    off(type: string, fn?: Function) {
        if (fn) {
            // 解绑单个事件
            const fnList = this.events[type]
            const onceFnList = this.onceEvents[type]
            if (fnList) {
                this.events[type] = fnList.filter(item => item !== fn)
            }
            if (onceFnList) {
                this.onceEvents[type] = onceFnList.filter(item => item !== fn)
            }
        } else {
            // 解绑所有事件
            this.events[type] = []
            this.onceEvents[type] = []
        }
    }

    emit(type: string, ...args: any[]) {
        this.events[type] && this.events[type].forEach(cb => cb(...args))
        if (this.onceEvents[type]) {
            this.onceEvents[type].forEach(cb => cb(...args))
            this.onceEvents[type] = []
        }
    }
}


// const e = new EventBus1()
// const e = new EventBus2()

// function fn1(a: any, b: any) { console.info('fn1', a, b); }
// function fn2(a: any, b: any) { console.info('fn2', a, b); }
// function fn3(a: any, b: any) { console.info('fn3', a, b); }


// e.on('key1', fn1)
// e.on('key1', fn2)
// e.once('key1', fn3)
// e.on('key2', fn3)

// e.emit('key1', 10, 20)
// e.emit('key1', 30, 40)

// e.off('key1', fn1)

// e.emit('key1', 100, 200)