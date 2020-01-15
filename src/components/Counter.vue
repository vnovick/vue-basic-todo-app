<template>
    <div>
        <h2>{{ counter }}</h2>
        <h2>{{counterPowerOfTwo}}</h2>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import { actionTypes } from '../store/counter';

    export default {
        computed: {
            counter(){
                return this.$store.getters.counter
            },
            counterPowerOfTwo(){
                return this.$store.getters.counterPower(2)
            }
        },
        methods: {
            increment(){
                this.$store.dispatch(actionTypes.INCREMENT, 2)
            },
            decrement(){
                this.$store.dispatch(actionTypes.DECREMENT, 3)
            }
        }
    }
</script>

<style scoped>

</style>