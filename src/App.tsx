import { ThemeProvider } from '@mui/material'
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom'
import { MainLayout } from './layouts'
import { About, Contact, Home, NotFound, Projects } from './pages'
import theme from './styles/theme/Theme'

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]

const router = createBrowserRouter(routes, {
    basename: '/portfolio',
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
