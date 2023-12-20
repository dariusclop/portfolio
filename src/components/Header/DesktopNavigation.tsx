import { ListItem } from '@mui/material'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MENU_ITEMS } from '../../utils/constants'
import HeaderButton from './HeaderButton'
import { List } from './styles'

const DesktopNavigation = () => {
    const [isSelected, setIsSelected] = useState('Home')

    const handleSelect = (item: string): void => {
        setIsSelected(item)
    }

    const createMenuItems = useMemo(
        () =>
            MENU_ITEMS.map((item, index) => (
                <ListItem key={`menu-item-${index}-${item}`} disablePadding>
                    <Link to={`${item.pageUrl}`}>
                        <HeaderButton
                            isSelected={isSelected === item.title}
                            onClick={() => handleSelect(item.title)}
                        >
                            {item.title}
                        </HeaderButton>
                    </Link>
                </ListItem>
            )),
        [isSelected]
    )

    return (
        <List
            sx={{
                display: {
                    xs: 'none',
                    md: 'flex',
                },
            }}
        >
            {createMenuItems}
            <ListItem disablePadding>
                <Link
                    to="https://drive.google.com/file/d/1q2Ypb8FY7HzdMv9KJsFT_jzKCcpr0E-L/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    <HeaderButton>Resume</HeaderButton>
                </Link>
            </ListItem>
        </List>
    )
}

export default DesktopNavigation
