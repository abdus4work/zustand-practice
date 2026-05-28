import { create } from 'zustand';

export type TODO = {
  id:number
  title: string
  isCompleted: boolean
}

export type Filter = 'all'|'completed' | 'active'

interface TodoState{
  todos:TODO[]
  addTodo:(title:string)=>void
  removeTodo: (id:number)=>void 
  toggleCompleted:(id:number)=>void
  filter:Filter
  setFilter:(filter:Filter)=>void
}

export const useTodoStore= create<TodoState>((set)=>({
  todos:[
    {
      id:1,
      title:'Write a blog',
      isCompleted:false
    },
    {
      id:2,
      title: 'Make videos',
      isCompleted: true
    }
  ],
  filter:'all'
  ,
  addTodo:(title)=>set((state)=>{
    if(!title.trim()) return state
    return {todos:[...state.todos,{
      id:state.todos.length+1,
      title,
      isCompleted:false
    }]}
  }),
  removeTodo:(id)=>set((state)=>{
    const todos = state.todos.filter(todo=>todo.id!==id)
    return {todos}
  }),
  toggleCompleted:(id)=>set((state)=>{
    const todos = state.todos.map(todo=>{
      if(todo.id===id){
        return {...todo,isCompleted:!todo.isCompleted}
      }else{
        return todo
      }
    })
    return {todos}
  }),
  setFilter:(filter)=>set(()=>({filter:filter}))
}))