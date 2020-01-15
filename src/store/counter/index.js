
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export * from './actions'
export * from './mutations'

const counterStore = {
    state: { counter: 0 },
    getters,
    mutations,
    actions
}



export default counterStore;