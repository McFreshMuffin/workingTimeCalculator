import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

test('render Home', () => {
  // render the component
  const wrapper = shallowMount(Home)

  // assert the error has gone away
  expect(wrapper.find('.error').exists()).toBe(false)
})