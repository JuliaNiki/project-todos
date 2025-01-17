import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'


const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        // filter: "all"
    },
    reducers: {
        addTodo: (store, action) => {
            const { input, dueDate, category } = action.payload
            const newTodo = {
                id: uniqid(),
                text: input,
                isComplete: false,
                createdAt: new Date().toString(),
                dueDate: dueDate.toString(),
                category
            }
            // add to the state
            store.items = [...store.items, newTodo]
        },
        toggleTodo: (store, action) => {
            const updatedItems = store.items.map(item => {
                if (item.id === action.payload) {
                    const updatedTodo = {
                        ...item,
                        isComplete: !item.isComplete
                    }
                    return updatedTodo
                } else {
                    return item
                }
            })
            store.items = updatedItems
        },
        deleteTodo: (store, action) => {
            const decreasedItems = store.items.filter((item) =>
                item.id !== action.payload
            )
            store.items = decreasedItems
        },
        deleteAllTodos: (store) => {
            store.items = []
        },
        completeAllTodos: (store) => {
            const updatedItems = store.items.map(item => {
                const updatedTodos = {
                    ...item,
                    isComplete: true
                }
                return updatedTodos
            })
            store.items = updatedItems
        },
        // toggleFilter: (store, action) => {
        //     store.filter = action.payload
        // }
    }
})

export default todos

// LEFT THIS CODE TO ASK ON 1-2-1 SESSION HOW THIS COULD BE DONE

// export const selectedTasks = (store) => {
//     const filter = store.todos.filter
//     const tasks = store.todos.items

//     if (filter === "all") {
//         return tasks
//     }
//     if (filter === "active") {
//         return tasks.filter((item) => {
//             return !item.isComplete
//         })
//     }
//     if (filter === "completed") {
//         return tasks.filter((item) => {
//             return item.isComplete
//         })
//     }
// }