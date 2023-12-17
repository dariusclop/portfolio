import { Avatar as AvatarMUI, Button as ButtonMUI, Typography as TypographyMUI } from "@mui/material";
import { styled } from '@mui/system';

const Nav = styled('nav')`
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
`

const UL = styled('ul')`
    list-style-type: none;
    display: flex;
    margin-left: auto;
`

const Avatar = styled(AvatarMUI)`
    margin-right: 1rem;
`

const Button = styled(ButtonMUI)(({ theme }) => ({
    color: '#000000',
    '&.isActive': {
        backgroundColor: theme.palette.primary.main,
    },
  }));

const Typography = styled(TypographyMUI)`
    font-weight: 500;
    letter-spacing: 0.02em;
`

export { Avatar, Button, Nav, Typography, UL };

