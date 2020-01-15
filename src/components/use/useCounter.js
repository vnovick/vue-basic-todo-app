import { ref, computed, onMounted } from "@vue/composition-api";

export const useCounter = (initialState, power) => {
  const count = ref(initialState);

  const countPowerOfTwo = computed(() => Math.pow(count.value, power));

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  onMounted(() => {
    alert("Composition api is awesome");
  });

  return {
    count: count.value,
    countPowerOfTwo,
    increment,
    decrement
  };
};
