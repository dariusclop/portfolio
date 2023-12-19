import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AvatarImage from '../../assets/avatarImage.png'
import { MENU_ITEMS } from '../../utils/constants'
import HeaderButton from './HeaderButton'
import { Avatar, HeaderElement, Nav, Typography, UL } from './styles'

const Header = () => {
    const [isSelected, setIsSelected] = useState('Home')

    const handleSelect = (item: string): void => {
        setIsSelected(item)
    }

    const createMenuItems = useMemo(
        () =>
            MENU_ITEMS.map((item, index) => (
                <li key={`menu-item-${index}-${item}`}>
                    <Link to={`${item.pageUrl}`}>
                        <HeaderButton
                            isSelected={isSelected === item.title}
                            onClick={() => handleSelect(item.title)}
                        >
                            {item.title}
                        </HeaderButton>
                    </Link>
                </li>
            )),
        [isSelected]
    )

    return (
        <HeaderElement>
            <Nav>
                <Avatar src={AvatarImage} sx={{ width: 68, height: 68 }} />
                <Typography>Darius-Alexandru Clop</Typography>
                <UL>
                    {createMenuItems}
                    <li>
                        <Link
                            to="https://drive.google.com/file/d/1q2Ypb8FY7HzdMv9KJsFT_jzKCcpr0E-L/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <HeaderButton>Resume</HeaderButton>
                        </Link>
                    </li>
                </UL>
            </Nav>
        </HeaderElement>
    )
}

export default Header
