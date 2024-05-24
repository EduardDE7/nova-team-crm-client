import { ThemeProvider } from '@/shared'

import { ReduxProvider } from './ReduxProvider'
import { RouterProvider } from './RouterProvider'

export const AppProvider = () => {
    return (
        <ReduxProvider>
            <ThemeProvider>
                <RouterProvider />
            </ThemeProvider>
        </ReduxProvider>
    )
}
