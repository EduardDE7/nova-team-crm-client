import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '@/shared'
import { useIsAuthorizedValue } from '@/shared/api/is-authorized'

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
    const allRoutes = publicRoutes.concat(privateRoutes)

    return (
        <BrowserRouter>
            <Routes>
                {notAuthorizedRoute(publicRoutes)}
                {isAuthorizedRoute(allRoutes, authorizedValue)}
            </Routes>
        </BrowserRouter>
    )
}
