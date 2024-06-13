import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '@/shared'
import { useIsAuthorizedValue } from '@/shared/api/is-authorized'

//solve type conflict problem
type TRouteItem = {
    Page: FC
    path: string
}
//add the function correctly
// function checkedRoutes(route: TRouteItem[]) {
//     route.map(({ Page, path }: TRouteItem) => (
//         <Route
//             key={path}
//             path={path}
//             element={<Page />}
//         />
//     ))
// }

export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                {useIsAuthorizedValue()
                    ? privateRoutes.map(({ Page, path }: TRouteItem) => (
                          <Route
                              key={path}
                              path={path}
                              element={<Page />}
                          />
                      ))
                    : publicRoutes.map(({ Page, path }: TRouteItem) => (
                          <Route
                              key={path}
                              path={path}
                              element={<Page />}
                          />
                      ))}
            </Routes>
        </BrowserRouter>
    )
}
