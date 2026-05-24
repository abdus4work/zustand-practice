# Zustand - (A React state management library) practice

## Zustand is a small, fast and scalable barebones state-management solution using simplified flux principles. It has a minimal API, but it's got all the essentials for managing state in React applications.

# Features:

  - **Simple API**: Easy to learn and use with minimal setup.
  - **Lightweight & Fast**: Minimal overhead and efficient re-rendering.
  - **Scalable**: Suitable for both small and large applications with proper store organization.
  - **Flexible**: Works with any React architecture or pattern.
  - **TypeScript Support**: Excellent built-in TypeScript support.
  - **DevTools Integration**: Supports Redux DevTools through middleware.
  - **SSR Support**: Can be used in server-rendered applications with proper state handling.
  - **React Native Support**: Works seamlessly in React Native.
  - **Growing Ecosystem**: Offers middleware and community-driven extensions.
  - **Open Source**: Community-maintained and actively improved.

## Installation
You can install Zustand using npm or yarn: 
```bash
npm install zustand
```
# Common patterns:
### Async actions: 
```js
  sconst useStore = create((set) => ({
  user: null,
  fetchUser: async (id) => {
    const user = await api.getUser(id)
    set({ user })
  },
})) 
```
### Slice (splitting large stores into smaller ones):
```js
const useStore = create((...args) => ({
  ...createAuthSlice(...args),
  ...createCartSlice(...args),
}))
```

### Middleware (persistence):
```js
import { persist } from 'zustand/middleware'

const useStore = create(persist(
  (set) => ({ count: 0, increment: () => set(s => ({ count: s.count + 1 })) }),
  { name: 'my-storage' } // saves to localStorage
))
```

# Mental Model:
> Store = State + Actions

Zustand's mental model is based on the concept of a "store" that holds the application state. The store is created using the `create` function, which takes a function that defines the initial state and any actions that can modify that state. Components can then subscribe to the store to access the state and trigger actions. When an action is called, it updates the state, and any components subscribed to that part of the state will re-render with the new values. This allows for a simple and efficient way to manage state in React applications without the need for complex boilerplate or additional libraries. The store can be organized in a way that suits the application's needs, and it can be easily extended with middleware for additional functionality like logging or persistence. Overall, Zustand provides a straightforward and flexible approach to state management that can scale with the complexity of the application while maintaining a simple mental model for developers to understand and work with.

# Task List:
These are the task that i have completed to practice Zustand

### **Task 1:** Counter App Build a counter with:
- increment, decrement, reset buttons
- A "step" input so the user can increment or decrement by custom amounts
- Display the count

### **Task 2:** Theme Toggle
- Store theme: 'light' | 'dark' in Zustand
- Toggle it with a button
- Apply the theme to the page background/text color

### **Task 3:** Todo List
- Add, delete, and toggle todos
- Filter by: All / Active / Completed
- Store everything in Zustand (no local state for the list)



[![npm version](https://img.shields.io/npm/v/zustand.svg)](https://www.npmjs.com/package/zustand)
[![Build Status](https://travis-ci.com/pmndrs/zustand.svg?branch=master)](https://travis-ci.com/pmndrs/zustand)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/zustand.svg)](https://bundlephobia.com/result?p=zustand)