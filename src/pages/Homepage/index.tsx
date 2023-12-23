import { Box, Button, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const HomeWrapper = styled(Box)`
    text-align: center;
`

const Home = () => {
    const navigate = useNavigate()

    return (
        <HomeWrapper>
            <Typography variant="h3" color="white" fontWeight={800}>
                Hey, I'm Darius Clop
            </Typography>
            <Typography variant="subtitle1" color="white">
                A Full-Stack Web Developer with a focus on JavaScript
                technologies
            </Typography>
            <Button onClick={() => navigate('/about')}>
                See more About Me
            </Button>
        </HomeWrapper>
    )
}

export default Home
