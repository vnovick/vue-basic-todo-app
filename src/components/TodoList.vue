<template>
  <ul class="todo-list">
    <todo-item
      v-for="(item) in todos"
      :key="item.id"
      :item="item"
      @remove-todo="$emit('remove-todo', $event)"
      @submit-update="$emit('submit-update', $event)"
    ></todo-item>
  </ul>
</template>

<script>
import TodoItem from '../components/TodoItem'

export default {
  name: "TodoList",
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoItem
  }
};
</script>

<style lang="scss" scoped>
</style>