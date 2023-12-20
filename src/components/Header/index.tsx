import AvatarImage from '../../assets/avatarImage.png'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import { Avatar, HeaderElement, Nav, Typography } from './styles'

const Header = () => {
    return (
        <HeaderElement>
            <Nav>
                <Avatar src={AvatarImage} sx={{ width: 68, height: 68 }} />
                <Typography>Darius-Alexandru Clop</Typography>
                <DesktopNavigation />
                <MobileNavigation />
            </Nav>
        </HeaderElement>
    )
}

export default Header
