import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom'
import { Home, NotFound } from './pages'
import { MainLayout } from './layouts'

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]

const router = createBrowserRouter(routes, {
    basename: '/portfolio',
})

const App = () => {
    return <RouterProvider router={router} />
}

export default App
