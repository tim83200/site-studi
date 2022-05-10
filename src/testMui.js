import React from 'react';
import { ThemeProvider, createTheme  } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import TitlePartChoice from './titleDifferentPart'
import Checkbox from '@mui/material/Checkbox';


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

const label = { inputProps: { 'aria-label': 'CheckBox demo' } };

const ContactsMui =() => {
    const classes = useStyles();
    return (
          <ThemeProvider theme={themeContacts}>
                  <TitlePartChoice title="Test"/>

        <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
          </ThemeProvider>
  )
}

export default ContactsMui