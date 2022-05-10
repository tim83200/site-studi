import React from 'react';
import { ThemeProvider, createTheme  } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TitlePartChoice from './titleDifferentPart'
import Avatar from '@mui/material/Avatar';
import Tim from "./picture/tim.jpg";


const useStyles = makeStyles({
    h1: {
        color: "#757575",
        fontSize: "2em",
        fontFamily: "Alegreya Sans SC",
        textAlign: "center",
        marginTop: "2em"
    },
    iconStyleFacebook: {
      color: 'white',
      marginBottom: '3vh',
      marginTop: "1em"
    },
    iconStyleInstagram: {
      color: 'white',
      marginBottom: '3vh'
    },
})
const themeContacts = createTheme({
    typography: {
      h6: {
        marginTop: "3em",
        textAlign: 'center'
      }
    },
})


const ContactsMui =() => {
    const classes = useStyles();
    return (
          <ThemeProvider theme={themeContacts}>
                  <TitlePartChoice title="Contacts"/>
                          <Typography variant='h6'>      
                                  Vous pouvez me contacter via les réseaux sociaux : <br/>  
                                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookIcon fontSize='large' className={classes.iconStyleFacebook}/></a>
                                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize='large' className={classes.iconStyleInstagram} /></a>
                                          <br/> Vous pouvez m'envoyer un e-mail via le lien suivant : <br/>   
                                              <a href="https://serene-lichterman-002461.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                      <Avatar 
                                                          alt="Tim tim" 
                                                          src={Tim}
                                                          sx={{width:'5em', height:'5em', marginLeft:"45%", marginTop:"2em", marginBottom:'20vh'}}
                                                      />
                                              </a>
                            </Typography>
          </ThemeProvider>

  )
}

export default ContactsMui