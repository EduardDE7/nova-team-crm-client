import { BrowserRouter, Route, Routes } from 'react-router-dom'

// eslint-disable-next-line boundaries/element-types
import { privateRoutes, publicRoutes } from '../router/index'
// eslint-disable-next-line boundaries/element-types
import { TRouteItem } from '../router/types'



export const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				{localStorage.getItem('isAuth')
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
