import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
  })

  it('renders properly', () => {
    // const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
    // expect(wrapper.text()).not.toContain('Hello Vitest')
    // expect(wrapper.text()).toContain('Hello JavaScript')
  })

  it('Props Change', async () => {
    const msg = 'こんにちは、Vue！'
    await wrapper.setProps({ msg })
    expect(wrapper.find('h1').text()).toBe(msg)
  }) 
})
