import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import PropBasic from '@/components/p08/PropBasic.vue'
import EventMouse from '@/components/p05/EventMouse.vue'
import EventCounter from '@/components/p08/EventCounter.vue'
import InjectList from '@/components/p08/InjectList.vue'

describe('Quick Vue', () => {
  it('Nest Component', () => {
    // const wrapper = mount(PropBasic, { })
    const wrapper = mount(PropBasic, { shallow: true })
    console.log(wrapper.html())
  })

  it('Event Basic', async () => {
    const wrapper = mount(EventMouse)
    await wrapper.trigger('click.right.prevent', {
        clientX: 100,
        clientY: 50
    })
    expect(wrapper.find('#main').text()).toContain('100, 50')
  })

  it('Custom Event', async () => {
    const wrapper = mount(EventCounter, { props: { step: 5 } })
    await wrapper.find('input').trigger('click')
    const emit = wrapper.emitted()
    console.log(emit)
    expect(emit.increment.length).toBe(1)
    expect(emit.increment[0][0]).toBe(5)
  })

  it('Provide/Inject', () => {
    const wrapper = mount(InjectList, { global:
      {
        provide: {
          list: {
            books: [
              { isbn: '978-4-8156-1336-0', title: 'Vue入門', price: 1000 },
              { isbn: '978-4-8156-1336-1', title: 'React入門', price: 2000 },
              { isbn: '978-4-8156-1336-2', title: 'Angular入門', price: 3000 }
            ],
            onclick: isbn => console.log(isbn) 
          }
        }
      }
    })
    expect(wrapper.findAll('tr').length).toBe(3)
  })
})
