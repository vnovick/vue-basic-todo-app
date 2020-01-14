<template>
  <div class="hello">
    <header>
      <slot name="header" :user="user">{{user.firstName}}</slot>
    </header>
    <section>
      <slot></slot>
    </section>
    <footer>
      <slot name="footer">Default footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    fullName(){
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  data(){
    return {
      user: {
        firstName: 'Vladimir',
        lastName: 'Novick'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
