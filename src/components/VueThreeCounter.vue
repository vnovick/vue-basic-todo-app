<template>
    <div>
        <h1>{{count}}</h1>
        <h2>{{countPowerOfTwo}}</h2>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>

    import { useCounter } from './use/useCounter'
    const createPowerThreeCounter = (state) => useCounter(state, 3)


    export default {
        setup() {
            const { count, increment, decrement, countPowerOfTwo  } = createPowerThreeCounter(0)
            return {
                count,
                increment,
                decrement,
                countPowerOfTwo
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>