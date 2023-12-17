import { Button, Typography } from './styles'

type ButtonProps = {
    isSelected?: boolean
    onClick?: () => void 
    children: React.ReactNode
}

const HeaderButton = ({
    isSelected = false,
    onClick = () => {},
    children,
}: ButtonProps) => {
    return (
        <Button className={isSelected ? 'isActive' : ''} onClick={onClick}>
            <Typography>{children}</Typography>
        </Button>
    )
}

export default HeaderButton
