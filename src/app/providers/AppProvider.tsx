import { ReduxProvider } from './ReduxProvider'
import { RouterProvider } from './RouterProvider'
import { ThemeProvider } from '@/shared'

export const AppProvider = () => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <RouterProvider />
            </ThemeProvider>
        </ReduxProvider>
    )
}
