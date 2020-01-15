import { uuid } from 'uuidv4'
import apiService from '../services/apiService'


export const allFilters = ['All', "Active", 'Completed']

const todoStore = {
    namespaced: true,
    state: {
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
          commit('setTodos', jsonResponse.data)
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
      }
}
export default todoStore