import {Link} from 'react-router-dom'
import React from 'react'
import { Button } from '@mui/material';
import { ThemeProvider, createTheme  } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import './css/navBarMuicss.css';


const themeNavbar = createTheme({
    typography: {
        button: {
            fontFamily: "hubballi",
            fontSize: "1em",
            marginTop: "1em",
            background: 'transparent',
        },
    },
    palette: {
        primary: {
            main: grey[900]
        }
    }
})


const NavBarMui = () => {
    return (
        <ThemeProvider theme={themeNavbar}>

            <Link to="/Accueil">
                <Button>Accueil</Button>
            </Link>

            <Link to="/Galerie">
                <Button>Galerie</Button>
            </Link>

            <Link to="/Prestations">
                <Button>Prestations</Button>
            </Link>

            <Link to="/Contacts">
                <Button>Contacts</Button>
            </Link>


            <Link to="/Test">
                <Button>Test</Button>
            </Link>


        </ThemeProvider>
    )
}

export default NavBarMui