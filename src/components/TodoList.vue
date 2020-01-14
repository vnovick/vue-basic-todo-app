<template>
<span>
  <ul class="todo-list">
    <todo-item
      v-for="(item) in todos"
      :key="item.id"
      :item="item"
    ></todo-item>
  </ul>
  </span>
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