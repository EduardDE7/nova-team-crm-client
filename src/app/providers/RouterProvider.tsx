import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '@/shared'
import { useIsAuthorizedValue } from '@/shared/api/is-authorized'

type TRouteItem = {
    Page: FC
    path: string
}

//add the function correctly
const checkedRoutes = (route: TRouteItem[]) => {
    const routes = route.map(({ Page, path }: TRouteItem) => (
        <Route
            key={path}
            path={path}
            element={<Page />}
        />
    ))
    return <>{routes}</>
}

export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                {useIsAuthorizedValue()
                    ? checkedRoutes(privateRoutes)
                    : checkedRoutes(publicRoutes)}
            </Routes>
        </BrowserRouter>
    )
}
