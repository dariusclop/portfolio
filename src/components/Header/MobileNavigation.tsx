import { Menu as MenuIcon } from '@mui/icons-material'
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    SwipeableDrawer,
} from '@mui/material'
import { Fragment, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MENU_ITEMS } from '../../utils/constants'

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setOpen(open)
        }

    const createMenuItems = useMemo(
        () => (
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {MENU_ITEMS.map((item, index) => (
                        <ListItem
                            key={`menu-item-${index}-${item}`}
                            disablePadding
                        >
                            <Link to={`${item.pageUrl}`}>
                                <ListItemButton>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <Link
                            to="https://drive.google.com/file/d/1q2Ypb8FY7HzdMv9KJsFT_jzKCcpr0E-L/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ListItemButton>
                                <ListItemText primary={'Resume'} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        ),
        []
    )

    return (
        <Box
            sx={{
                marginLeft: 'auto',
                display: {
                    xs: 'block',
                    md: 'none',
                },
            }}
        >
            <Fragment>
                <IconButton
                    aria-label="open drawer"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor={'right'}
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {createMenuItems}
                </SwipeableDrawer>
            </Fragment>
        </Box>
    )
}

export default MobileNavigation
