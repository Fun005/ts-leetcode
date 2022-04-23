/**
 * @description eventBus test
 * @author tangc1
 * @date 2022-04-23 17:04:30
*/
import { EventBus1, EventBus2 } from '../../src/write-code/event-bus'

describe('event bus test', () => {
    it('绑定事件，触发事件', () => {
        const event = new EventBus1()

        const fn1 = jest.fn() // jest mock function
        const fn2 = jest.fn()
        const fn3 = jest.fn()

        event.on('key1', fn1)
        event.on('key1', fn2)
        event.on('key2', fn3)

        event.emit('key1', 10, 20)

        expect(fn1).toBeCalledWith(10, 20)
        expect(fn2).toBeCalledWith(10, 20)
        expect(fn3).not.toBeCalled()
    })
    it('解绑单个事件', () => {
        const event = new EventBus1()

        const fn1 = jest.fn()
        const fn2 = jest.fn()

        event.on('key1', fn1)
        event.on('key1', fn2)

        event.off('key1', fn1)

        event.emit('key1', 10, 20)
        expect(fn1).not.toBeCalled()
        expect(fn2).toBeCalledWith(10, 20)
    })
    it('解绑全部事件', () => {
        const event = new EventBus1()

        const fn1 = jest.fn()
        const fn2 = jest.fn()

        event.on('key1', fn1)
        event.on('key1', fn2)

        event.off('key1')

        event.emit('key1', 10, 20)
        expect(fn1).not.toBeCalled()
        expect(fn2).not.toBeCalled()
    })
    it('once', () => {
        const event = new EventBus1()

        let n = 1
        const fn1 = jest.fn(() => n++)
        const fn2 = jest.fn(() => n++)

        event.once('key1', fn1)
        event.once('key1', fn2)

        event.emit('key1')
        event.emit('key1')
        event.emit('key1')
        event.emit('key1')
        event.emit('key1')

        expect(n).toBe(3)

    })
})