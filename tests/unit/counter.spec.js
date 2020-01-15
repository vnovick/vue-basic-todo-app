import getters from '@/store/counter/getters'

describe('Counter Store Test', () => {
    it('Test getter', () => {

        const stateStub = {
            counter: 0
        }
        const gettersStub = {
            counter: 2
        }
        expect(getters.counter(stateStub)).toBe(0)

        const counterPowerFn = getters.counterPower(stateStub, gettersStub)
        expect(counterPowerFn(2)).toBe(4)
    })
})