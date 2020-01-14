import { uuid } from 'uuidv4'
import apiService from '../services/apiService'

export const mutationTypes = {
    COUNTER_UPDATE: 'COUNTER_UPDATE'
  }
  
  export const actionTypes = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
  }
  
export const allFilters = ['All', "Active", 'Completed']

const todoStore = {
    state: {
        counter: 0,
        todos: [],
        activeFilter: 'All'
      },
      getters: {
        todosFilter(state){
          return state.activeFilter
        },
        todos(state){
          return state.todos
        },
        itemsLeft(state, getters){
          return getters.activeTodos.length;
        },
        // ------------ counter ---------
        counter(state){
          return state.counter
        },
        counterPower: (state, getters) => (power) => {
          return Math.pow(getters.counter, power)
        },
        activeTodos(state) {
          return state.todos.filter(todo => !todo.completed);
        },
        completedTodos(state) {
          return state.todos.filter(todo => todo.completed);
        },
        relevantTodos(state, getters) {
          if (getters.todosFilter === "Active") {
            return getters.activeTodos;
          }
          if (getters.todosFilter === "Completed") {
            return getters.completedTodos;
          }
          return getters.todos;
        }
      },
      mutations: {
        [mutationTypes.COUNTER_UPDATE](state, numToChange){
          state.counter = state.counter + numToChange
        },
        submitNewTodo(state, newTodo){
          state.todos.push({
            id: uuid(),
            todo: newTodo,
            completed: false
          })
        },
        submitUpdate(state, { id, editingTodo }){
          state.todos = state.todos.map(todo =>
            todo.id === id ? { ...todo, todo: editingTodo } : todo
          );
        },
        removeTodo(state, id){
          state.todos = state.todos.filter(todo => todo.id !== id);
        },
        setCompleted(state,{ id, checked}){
          state.todos = state.todos.map(todo => todo.id === id ? { ...todo, completed: checked} : todo)
        },
        setFilter(state, filter){
           state.activeFilter = filter;
        },
        removeCompleted(state, activeTodos){
          state.todos = activeTodos
        },
        setTodos(state, todos){
          state.todos = todos
        }
      },
      actions: {
        async fetchTodos({ commit }) {
          const jsonResponse = await apiService.getTodos()
          console.log(jsonResponse)
          commit('setTodos', jsonResponse.data)
        },
        async doWeirdStuff({ dispatch, commit }){
          await dispatch('incrementCounterByTwo')
          commit(mutationTypes.COUNTER_UPDATE, 100)
        },
        incrementCounterByTwo({ dispatch, commit }) {
          return new Promise(resolve => {
            commit(mutationTypes.COUNTER_UPDATE, 1)
            setTimeout(() => {
              dispatch(actionTypes.DECREMENT, 2)
              resolve(true)
            }, 1000);
          })
        },
        setFilter({ commit}, payload){
          commit('setFilter', payload)
        },
        removeCompleted({ commit, getters }){
          commit('removeCompleted', getters.activeTodos)
        },
        submitTodo({ commit }, newTodo){
          commit('submitNewTodo', newTodo)
        },
        submitUpdate({ commit}, payload){
          commit('submitUpdate', payload)
        },
        removeTodo({ commit}, payload){
          commit('removeTodo', payload)
        },
        setCompleted({ commit }, payload) {
          commit('setCompleted', payload)
        },
        [actionTypes.INCREMENT](context, byNum){
          context.commit(mutationTypes.COUNTER_UPDATE, byNum)
    
        },
        [actionTypes.DECREMENT](context, byNum){
          context.commit(mutationTypes.COUNTER_UPDATE, byNum * -1)
        }
      }
}
export default todoStore