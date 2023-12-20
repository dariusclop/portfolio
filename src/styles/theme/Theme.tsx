import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme } from '@mui/material/styles'

export default createTheme({
    palette: {
        primary: {
            main: '#85A8E4',
        },
    },
    typography: {
        body1: {
            fontSize: '1rem',
        },
    },
    breakpoints: {
        values: {
            //defaults
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,

            // custom
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
})
