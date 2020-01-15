import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'
import { mount } from '@vue/test-utils';


describe('Todo List spec', () => {
    it('Empty component renders correctly', () => {
        const todos = []

        const wrapper = mount(TodoList, {
            propsData: { todos },
        })
        expect(wrapper.find('.todo-list')).toBeDefined()
        expect(wrapper).toMatchSnapshot()
    })
    //Snapshots
    it('Component with one todo renders correctly', () => {
        const todos = [{
            id: 1,
            todo: 'First todo'
        }]

        const dummyRemove = jest.fn()
        const dispatch = jest.fn()

        const wrapper = mount(TodoList, {
            propsData: { todos },
            methods: {
                dummyRemove
            },
            $store: {
                dispatch
            }
        })

        wrapper.find(TodoItem).vm.$emit('dummy-remove')
        expect(dummyRemove).toBeCalled()
    })
})