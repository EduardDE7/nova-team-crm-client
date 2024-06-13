import { authRoutes } from './auth'
import { dashboardRoutes } from './dashboard'
import { loginRoutes } from './login'
import { testRoutes } from './testPage'

export const privateRoutes = [dashboardRoutes]

export const publicRoutes = [authRoutes, loginRoutes, testRoutes]
