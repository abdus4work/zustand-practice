import TodoImage from '@/public/screenshots/todo.png'
import { Task } from "@/features/task/type";
import ThemeButton from "@/components/navbar/theme-button";
import Counter from "@/features/counter/counter";
import Todo from "@/features/todo/todo";
import Product from "@/features/product/product";
export const TASKS: Task[] = [
  {
    id: 1,
    title: "Theme Switcher",
    slug: "theme-switcher",
    description:
      "This task explores Zustand for global state management by implementing Theme Switcher it demonstrate how shared UI can be updated and accessed across components without prop drilling",
    previewImage: "",
    component: ThemeButton,
  },
  {
    id: 2,
    title: "Todo Management",
    slug: "todo",
    description:
      "A Todo management system built with Zustand to handle task creation, completion, deletion through centralized state. This task demonstrates scalable state management and reactive UI updates without prop drilling.",
    previewImage: TodoImage,
    component: Todo,
    explanation: {
      description:
        "This task demonstrates how\n" +
        "Zustand can manage todo state\n" +
        "globally without prop drilling.",
      features: ["Add todo", "Delete todo", "Toggle completed", "Filter todo"],
      concept: [
        "Zustand store",
        "Global state",
        "Derived filtering",
        "Action & updates",
      ],
      code: `
// store
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
      `,
    },
  },
  {
    id: 3,
    title: "Counter",
    slug: "counter",
    description:
      "A counter application built with Zustand to demonstrate centralized state management through increment, decrement, and reset operations with reactive UI updates.",
    previewImage: "",
    component: Counter,
  },
  {
    id: 4,
    title: "Shopping Cart",
    slug: "shopping-cart",
    description:
      "A shopping cart system built with Zustand to manage products, quantities, and cart updates through centralized state. This task demonstrates scalable global state management and synchronized UI updates without prop drilling.",
    previewImage: "",
    component: Product
  },
];
