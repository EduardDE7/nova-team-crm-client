import { configureStore } from '@reduxjs/toolkit'
import { theme } from '@/shared'

export const store = configureStore({
    reducer: {
        theme
    }
})

export type TStore = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch
