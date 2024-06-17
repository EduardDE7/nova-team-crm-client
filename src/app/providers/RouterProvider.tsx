import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '@/shared'
import { useIsAuthorizedValue } from '@/shared/api/is-authorized'

type TRouteItem = {
    Page: FC
    path: string
}

const routingByPublickRoutes = (route: TRouteItem[]) => {
    const routes = route.map(({ Page, path }: TRouteItem) => (
        <Route
            key={path}
            path={path}
            element={<Page />}
        />
    ))
    return <>{routes}</>
}

const routingByPrivateRoutes = (route: TRouteItem[], checkedAuth: boolean) => {
    if (checkedAuth) {
        const routes = route.map(({ Page, path }: TRouteItem) => (
            <Route
                key={path}
                path={path}
                element={<Page />}
            />
        ))
        return <>{routes}</>
    }
    const routes = route.map(({ Page, path }: TRouteItem) =>
        path === '/dashboard' ? (
            <Route
                key={path}
                path={path}
                element={<Navigate to="/login" />}
            />
        ) : (
            <Route
                key={path}
                path={path}
                element={<Page />}
            />
        )
    )
    return <>{routes}</>
}

export const RouterProvider = () => {
    const authorizedValue = useIsAuthorizedValue()
    const allRoutes = publicRoutes.concat(privateRoutes)

    return (
        <BrowserRouter>
            <Routes>
                {!authorizedValue
                    ? routingByPrivateRoutes(allRoutes, authorizedValue)
                    : routingByPublickRoutes(publicRoutes)}
            </Routes>
        </BrowserRouter>
    )
}
