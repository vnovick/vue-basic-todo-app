<template>
  <li :class="{ completed: item.completed, editing: editingTodoId === item.id }">
    <div class="view" @dblclick="setEditing(item.id)">
      <input class="toggle" type="checkbox" v-model="item.completed" />
      <label>{{item.todo}}</label>
      <button class="destroy" @click="$emit('remove-todo', item.id)"></button>
    </div>
    <input class="edit" @keyup.enter="submitUpdate(item.id)" v-model="editingTodo" />
  </li>
</template>

<script>
export default {
  data() {
    return {
      editingTodoId: null,
      editingTodo: ""
    };
  },
  props: {
    item: Object
  },
  methods: {
    setEditing(id) {
      this.editingTodoId = id;
    },
    submitUpdate(id) {
      this.$emit("submit-update", { id, editingTodo: this.editingTodo });
      this.editingTodoId = null;
      this.editingTodo = "";
    }
  }
};
</script>

<style scoped>
div {
  border: 2px solid olive;
}
</style>