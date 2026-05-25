import { useCountStore } from '@/store/store.ts'
import {beforeEach,describe,expect,it} from 'vitest'

describe('count store',()=>{
  beforeEach(()=>{
    useCountStore.setState({count:0,step:1})
  })
  it('should increase count by one',()=>{
    useCountStore.getState().increase()
    const count = useCountStore.getState().count
    expect(count).toBe(1)
    console.log(count)
  })
  it('should decrease count by one',()=>{
    useCountStore.getState().decrease()
    const count = useCountStore.getState().count
    expect(count).toBe(-1)
    console.log(count)
  })
})