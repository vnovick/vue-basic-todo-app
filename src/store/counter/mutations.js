export const mutationTypes = {
    COUNTER_UPDATE: "COUNTER_UPDATE"
  };
  

const counterMutations = {
    [mutationTypes.COUNTER_UPDATE](state, numToChange) {
      state.counter = state.counter + numToChange;
    }
}
export default counterMutations