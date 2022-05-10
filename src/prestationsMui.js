import React from 'react';
import { ThemeProvider, createTheme  } from '@mui/material/styles'
import onlyMePrestations from './picture/onlyMePrestations.jpg'
import babyPrestations from './picture/babyPrestations.jpg'
import immortaliseEventPrestations from './picture/immortaliseEventPrestations.jpg'
import onceUpontATimePrestations from './picture/onceUpontATimePrestations.jpg'
import forTwoPrestations from './picture/forTwoPrestations.jpg'
import famillyPrestations from './picture/famillyPrestations.jpg'
import TitlePartChoice from './titleDifferentPart'
import CreationDifferentPartPrestations from './changeStyleMuiPrestations';
import Grid from '@mui/material/Grid';


const themePrestations = createTheme({
  typography: {
    h6: {
      textAlign: 'center',
      marginTop: '0.5em',
      fontFamily: "Fredoka",
    },
  },
})

const PrestationsMui = () => {
  return (
    <ThemeProvider theme={themePrestations}>
        <TitlePartChoice title="Prestations & Tarifs"/>
            <Grid container sm={12} spacing={1}>

                    <Grid item sm={10} md={4}>
                            <CreationDifferentPartPrestations
                                  text1="« Juste moi »  130€"
                                  text2= "Séance pour une personne, en extérieur ou en studio"
                                  text3={onlyMePrestations}
                            />
                    </Grid>
  
                    <Grid item sm={10} md={4}>
                            <CreationDifferentPartPrestations
                                  text1="« Mon bébé »  100€"
                                  text2= "Photo d’enfant moins de 3 ans (photo à domicile)"
                                  text3={babyPrestations}
                            />
                    </Grid>


                    <Grid item sm={10} md={4}>
                            <CreationDifferentPartPrestations
                                    text1="« Pour deux » 195€"
                                    text2= "Pour deux personnes, en extérieur ou en studio "
                                    text3={forTwoPrestations}
                            />     
                    </Grid>

                    <Grid item sm={10} md={4}>
                            <CreationDifferentPartPrestations
                                    text1="« Il était une fois »  160€"
                                    text2= "Photo de grossesse (À votre domicile, en extérieur ou en studio) "
                                    text3={onceUpontATimePrestations}
                            />
                    </Grid>

                    <Grid item sm={10} md={4}>
                            <CreationDifferentPartPrestations
                                    text1="« J’immortalise l’événement » "
                                    text2= "Photo de grossesse (À votre domicile, en extérieur ou en studio) "
                                    text3={immortaliseEventPrestations}
                            />
                    </Grid>
  
                    <Grid item sm={10} md={4}>
                            <CreationDifferentPartPrestations
                                    text1="« Famille »  220€"
                                    text2= "Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio."
                                    text3={famillyPrestations}
                            />
                    </Grid>
            </Grid>
    </ThemeProvider>

  )
}

export default PrestationsMui