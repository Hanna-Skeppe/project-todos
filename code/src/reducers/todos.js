import { createSlice } from '@reduxjs/toolkit'


export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
    { id: 1, category: 'Study', text: 'Watch video on actions & reducers', complete: true },
    { id: 2, category: 'Study', text: 'Follow redux codealong', complete: true },
    { id: 3, category: 'Study', text: 'Fork weekly assignment', complete: true },
    { id: 4, category: 'Study', text: 'Create a todo app', complete: false },
    ]
  },
  reducers: {
    addItem: (store, action) => {
      const { text, category, dueDate } = action.payload
      store.items.push({ id: Date.now(), text, category, dueDate })
    },
    removeTodo: (store, action) => {
      // find item/ filter item
      // remove it from the items array
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (store, action) => {
      store.items = []
    },
    toggleCompleted: (store, action) => {
      // find item with the item id that matches the payload with find-method:
      const foundItem = store.items.find((item) => item.id === action.payload)
      // toggle the value of completed
      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    }
  }
})