import { Button, Typography } from './styles'

type ButtonProps = {
    children: React.ReactNode
}

const HeaderButton = ({ children }: ButtonProps) => {
    return (
        <Button>
            <Typography>{children}</Typography>
        </Button>
    )
}

export default HeaderButton
