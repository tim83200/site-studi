import React from 'react'
import { ThemeProvider, createTheme  } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import FooterContainer from './footerDoc'


const themeFooter = createTheme({
    typography: {
        h4: {
            fontFamily: "hubballi",
            fontSize: "0.7em",
            marginTop: "1em",
            justifyContent: 'flex-start',
            marginBottom: '-5px',
        }
    },
})


const NavBarMui = () => {
    return (
        <ThemeProvider theme={themeFooter}>
            <Box textAlign='center'>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <FooterContainer
                            choiceTextFooter1="charles cantin"
                            choiceTextFooter2=" 06 06 06 06 06"
                        />

                        <FooterContainer
                            choiceTextFooter1="Photo Source: Pixabay"
                            choiceTextFooter2="All right reserved &#xA9;"
                        />

                        <FooterContainer
                            choiceTextFooter1="charlescantin@hotmail.fr"
                            choiceTextFooter2="252 rue Charles Cantin 83200 Toulon"
                        />
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default NavBarMui