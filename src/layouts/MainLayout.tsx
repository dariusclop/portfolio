import { styled } from '@mui/material'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import backgroundDesktop from '../assets/background-desktop.png'
import backgroundMobile from '../assets/background-mobile.png'
import { Header } from '../components'

const Main = styled('main')(({ theme }) => ({
    minHeight: 'calc(100% - 6.25rem)',
    padding: '6.25rem 2rem 0',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    WebkitBackgroundSize: 'cover',

    [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${backgroundMobile})`,
    },

    [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${backgroundDesktop})`,
    },
}))

const MainLayout = () => {
    return (
        <Fragment>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </Fragment>
    )
}

export default MainLayout
