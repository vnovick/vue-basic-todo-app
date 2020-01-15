<template>
<span>
  <ul class="todo-list">
    <todo-item
      v-for="(item) in todos"
      :key="item.id"
      :item="item"
      @dummy-remove="dummyRemove"
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
  methods: {
    dummyRemove: () => {}
  },
  components: {
    TodoItem
  }
};
</script>

<style lang="scss" scoped>
</style>