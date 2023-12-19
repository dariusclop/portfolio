import { styled } from '@mui/material'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import background from '../assets/background.png'
import { Header } from '../components'

const Main = styled('main')`
    width: 100%;
    min-height: calc(100% - 6.25rem);
    padding-top: 6.25rem;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
`

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
