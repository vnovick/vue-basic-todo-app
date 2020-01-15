<template>
  <div class="hello">
    <header>
      <slot name="header" :user="user">{{user.firstName}}</slot>
      <input type="text" v-model="html">
      <div></div>
    </header>
    <section>
      <button class="buttonSomething" @click="toggleShow">{{ caption}}</button>
      <transition
        @before-enter="beforeEnter"
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated hinge"
      >
        <p v-if="show" class="hello-caption">hello</p>
      </transition>
      <slot></slot>
    </section>
    <footer>
      <input type="text" ref="otherInput"/>
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
    },
    otherInput() {
      return this.$refs.otherInput
    }
  },
  data(){
    return {
      html: '',
      caption: 'Show Hello',
      myarg: 'other.prevent',
      show: false,
      user: {
        firstName: 'Vladimir',
        lastName: 'Novick'
      }
    }
  },
  methods: {
    beforeEnter(){
      console.log("Gonna animate")
    },
    toggleShow(){
      this.caption = 'Hide Hello'
      this.show = !this.show
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
	
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
