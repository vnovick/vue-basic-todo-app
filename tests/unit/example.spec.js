import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Hello World component test', () => {

    //Snapshot test
    it('Check that markup is correct', () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
    })
    expect(wrapper).toMatchSnapshot()
  })
  // Unit test
  it('Check that it has button that triggers toggleShow', () => {
    const msg = 'new message'
    const toggleShow = jest.fn()
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
      methods: {
        toggleShow
      }
    })
    const coolButton = wrapper.find('.buttonSomething');
    coolButton.trigger('click')
    expect(toggleShow).toBeCalled()
  })

  // Snapshot test with some functionality
  it('Check that toggleShow button renders correct snapshot', () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      propsData: { msg },
    })
    const coolButton = wrapper.find('.buttonSomething');
    coolButton.trigger('click')
    const animatedHelloElement = wrapper.find('.hello-caption')
    expect(animatedHelloElement).toBeDefined();
    expect(animatedHelloElement.text()).toMatch('hello')
    expect(wrapper).toMatchSnapshot()
  })

  it('Check if slots are applied', () => {
    const wrapper = mount(HelloWorld, {
      slots: {
        default: `<div class="default-test-slot"></div>`,
        header: `<div class="header-test-slot"></div>`,
        footer: `<div class="footer-test-slot"></div>`
      }
    })

    expect(wrapper.find('.footer-test-slot')).toBeDefined()
    expect(wrapper.find('.header-test-slot')).toBeDefined()
    expect(wrapper.find('.default-test-slot')).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })
})
