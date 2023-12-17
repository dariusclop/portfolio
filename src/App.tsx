import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom'
import { Home, NotFound } from './pages'
import { MainLayout } from './layouts'
import theme from './styles/theme/Theme'
import { ThemeProvider } from '@mui/material'

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
    return <ThemeProvider theme={theme}><RouterProvider router={router} /></ThemeProvider>
}

export default App
