import { AuthPage } from '@/pages'
import { LoginPage } from '@/pages'
import { DashboardPage } from '@/pages/Dashboard'
import { HomePage } from '@/pages/Home'
import { PageNotFound } from '@/pages/PageNotFound'

import {
    AUTHPAGE,
    DASHBOARDPAGE,
    HOMEPAGE,
    LOGINPAGE,
    NOTFOUNDPAGE
} from './urlsConstants'

export const publicRoutes = [
    {
        Page: HomePage,
        path: HOMEPAGE
    },
    {
        Page: AuthPage,
        path: AUTHPAGE
    },
    {
        Page: LoginPage,
        path: LOGINPAGE
    },
    {
        Page: PageNotFound,
        path: NOTFOUNDPAGE
    }
]

export const privateRoutes = [
    {
        Page: DashboardPage,
        path: DASHBOARDPAGE
    }
]
