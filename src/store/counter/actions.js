import { mutationTypes } from './mutations'

export const actionTypes = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
  };
  
const counterActions = {
    async doWeirdStuff({ dispatch, commit }) {
      await dispatch("incrementCounterByTwo");
      commit(mutationTypes.COUNTER_UPDATE, 100);
    },
    incrementCounterByTwo({ dispatch, commit }) {
      return new Promise(resolve => {
        commit(mutationTypes.COUNTER_UPDATE, 1);
        setTimeout(() => {
          dispatch(actionTypes.DECREMENT, 2);
          resolve(true);
        }, 1000);
      });
    },
    [actionTypes.INCREMENT](context, byNum) {
      context.commit(mutationTypes.COUNTER_UPDATE, byNum);
    },
    [actionTypes.DECREMENT](context, byNum) {
      context.commit(mutationTypes.COUNTER_UPDATE, byNum * -1);
    }
  }

export default counterActions;