import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addItem: (store, action) => {
      const { text, category, complete, dueDate, startDate } = action.payload
      store.items = [...store.items, { id: Date.now(), text, category, complete, dueDate, startDate }]
    },
    removeTodo: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (store) => {
      store.items = []
    },
    toggleCompleted: (store, action) => {
      const foundItem = store.items.find((item) => item.id === action.payload)
      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    },
    setAllComplete: (store, action) => {
      store.items.map((item) => (item.complete = true) === action.payload)
    },
    setAllIncomplete: (store, action) => {
      store.items.map((item) => (item.complete = false) === action.payload)
    }
  }
})