import {create} from 'zustand'

interface CounterState{
  count: number,
  increase:()=>void
  decrease:()=>void
  step:number
  setStep:(step:number)=>void
  clear:()=>void
} 

export const useCountStore = create<CounterState>((set)=>({
  count:0,
  step:1,
  increase:()=>set((state)=>({count:state.count+state.step})),
  decrease:()=>set((state)=>({count:state.count-state.step})),
  setStep:(step)=>set(()=>{
    return {step:step}
  }),
  clear:()=>set({count:0,step:1})
}))