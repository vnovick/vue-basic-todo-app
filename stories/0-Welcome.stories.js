
import HelloWorld from '../src/components/HelloWorld'

export default {
  title: 'Hello World',
  component: HelloWorld,
};

export const ToStorybook = () => ({
  components: { HelloWorld },
  template: '<hello-world msg="Hey" />'
});

ToStorybook.story = {
  name: 'Hello World',
};
