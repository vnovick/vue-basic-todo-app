<template>
  <li :class="{ completed: item.completed, editing: editingTodoId === item.id }">
    <div class="view" @dblclick="setEditing(item.id)">
      <input class="toggle" type="checkbox" v-model="isCompleted" />
      <label>{{item.todo}}</label>
      <button class="destroy" @click="removeTodo(item.id)"></button>
    </div>
    <input class="edit" @keyup.enter="submitUpdate(item.id)" v-model="editingTodo" />
  </li>
</template>

<script>
export default {
  data() {
    return {
      editingTodoId: null,
      editingTodo: "",
      checked: false
    };
  },
  computed: {
    isCompleted: {
      get(){
        return this.item.completed
      },
      set(checked){
        this.$store.dispatch('setCompleted', {
          id: this.item.id,
          checked
        })
      }
    }
  },
  props: {
    item: Object
  },
  methods: {
    setEditing(id) {
      this.editingTodoId = id;
    },
    submitUpdate(id) {
      this.$store.dispatch('submitUpdate', { id, editingTodo: this.editingTodo})
      this.editingTodoId = null;
      this.editingTodo = "";
    },
    removeTodo(id){
      this.$store.dispatch('removeTodo', id)
    }
  }
};
</script>

<style scoped>
div {
  border: 2px solid olive;
}
</style>