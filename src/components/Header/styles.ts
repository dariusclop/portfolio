import {
    Avatar as AvatarMUI,
    Box,
    Button as ButtonMUI,
    IconButton as IconButtonMUI,
    List as ListMUI,
    Typography as TypographyMUI,
    styled,
} from '@mui/material'
import { Link as LinkRRD, NavLink as NavLinkRRD } from 'react-router-dom'

const HeaderElement = styled('header')`
    position: fixed;
    width: 100%;
    top: 0;
`

const Nav = styled('nav')`
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
`

const List = styled(ListMUI)`
    margin-left: auto;
`

const Avatar = styled(AvatarMUI)`
    margin-right: 1rem;
`

const NavLink = styled(NavLinkRRD)(({ theme }) => ({
    '&.active button': {
        backgroundColor: theme.palette.primary.main,
    },
}))

const Button = styled(ButtonMUI)`
    min-width: 6.25rem;
`

const Typography = styled(TypographyMUI)`
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #ffffff;
`

const DrawerWrapper = styled(Box)`
    width: 15.625rem;
    color: #000000;
`

const IconButton = styled(IconButtonMUI)`
    color: #ffffff;
`

const Link = styled(LinkRRD)`
    width: 100%;
    text-decoration: none;
    :link,
    :visited {
        color: #000000;
    }
`

export {
    Avatar,
    Button,
    DrawerWrapper,
    HeaderElement,
    IconButton,
    Link,
    List,
    Nav,
    NavLink,
    Typography
}

