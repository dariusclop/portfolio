import {
    Avatar as AvatarMUI,
    Button as ButtonMUI,
    Typography as TypographyMUI,
    styled,
} from '@mui/material'

const HeaderElement = styled('header')`
    position: fixed;
    width: 100%;
    top: 0;
`

const Nav = styled('nav')`
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    background-color: #ffffff;
`

const UL = styled('ul')`
    list-style-type: none;
    margin-left: auto;
`

const Avatar = styled(AvatarMUI)`
    margin-right: 1rem;
`

const Button = styled(ButtonMUI)(({ theme }) => ({
    color: '#000000',
    minWidth: '6.25rem',
    '&.isActive': {
        backgroundColor: theme.palette.primary.main,
    },
}))

const Typography = styled(TypographyMUI)`
    font-weight: 500;
    letter-spacing: 0.02em;
`

export { Avatar, Button, HeaderElement, Nav, Typography, UL }

