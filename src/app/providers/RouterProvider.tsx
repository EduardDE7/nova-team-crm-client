import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '@/shared'
import { useIsAuthorizedValue } from '@/shared/api/is-authorized'
import { NOTFOUNDPAGE } from '@/shared/router/URL/index'

type TRouteItem = {
    Page: FC
    path: string
}

const notAuthorizedRoute = (route: TRouteItem[]) => {
    const routes = route.map(({ Page, path }: TRouteItem) => (
        <Route
            key={path}
            path={path}
            element={<Page />}
        />
    ))
    return <>{routes}</>
}

const isAuthorizedRoute = (route: TRouteItem[], checkedAuth: boolean) => {
    const routes = route.map(({ Page, path }: TRouteItem) => (
        <Route
            key={path}
            path={path}
            element={
                checkedAuth ? (
                    <Page />
                ) : (
                    <Navigate
                        to="/login"
                        replace
                    />
                )
            }
        />
    ))
    return <>{routes}</>
}

export const RouterProvider = () => {
    const authorizedValue = useIsAuthorizedValue()

    return (
        <BrowserRouter>
            <Routes>
                {notAuthorizedRoute(publicRoutes)}
                {isAuthorizedRoute(privateRoutes, authorizedValue)}
                <Route
                    path="*"
                    element={
                        <Navigate
                            to={NOTFOUNDPAGE}
                            replace
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
