import { AuthPage } from '@/pages'
import { LoginPage } from '@/pages'
import { DashboardPage } from '@/pages/Dashboard'
import { HomePage } from '@/pages/Home'

export const publicRoutes = [
    {
        Page: HomePage,
        path: '/'
    },
    {
        Page: AuthPage,
        path: '/auth'
    },
    {
        Page: LoginPage,
        path: '/login'
    }
]

export const privateRoutes = [
    {
        Page: DashboardPage,
        path: '/dashboard'
    }
]
