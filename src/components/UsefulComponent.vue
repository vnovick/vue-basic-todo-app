<script>
export default {
  render: function(createElement) {
    console.log(this)
    return createElement(
      "div", // tag name
      this.$slots.default // array of children
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
};
</script>
