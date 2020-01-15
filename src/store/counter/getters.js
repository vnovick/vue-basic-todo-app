const getters = {
    // ------------ counter ---------
    counter(state) {
      return state.counter;
    },
    counterPower: (state, getters) => power => {
      return Math.pow(getters.counter, power);
    }
  }

  export default getters