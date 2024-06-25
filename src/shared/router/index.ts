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
// eslint-disable-next-line import/no-internal-modules
} from '@/shared/router/URL/index'




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
