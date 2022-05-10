import React, { useState, useRef } from 'react';
import { ThemeProvider, styled, createTheme  } from '@mui/material/styles'
import weddingGallery from './picture/weddingGallery.jpg'
import pregnancyGallery from './picture/pregnancyGallery.jpg'
import babyGallery from './picture/babyGallery.jpg'
import portraitGallery from './picture/portraitGallery.jpg'
import baptismGallery from './picture/baptismGallery.jpg'
import coupleGallery from './picture/coupleGallery.jpg'
import photographeGallery from './picture/photographeGallery.jpg'
import famillyGallery from './picture/famillyGallery.jpg'
import CreationDifferentPartGallery from './changeStyleMuiGallery';
import TitlePartChoice from './titleDifferentPart';
import Grid from '@mui/material/Grid';
import homePageGallery from './picture/homePageGallery.jpg'
import ChangingPictureGallery from './homePagePictureGallery';
import { makeStyles } from '@mui/styles';
import './css/galerieMuiCss.css'

const useStyles = makeStyles({
        inputStyles: {
            fontSize: "1.5em",
            borderRadius: "0.5em",
            marginBottom: "1em",
            marginLeft: "1em"
        },
    })

const InputStyled = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
                display: "none"
            },
}))
const themeContactsGallery = createTheme({
    typography: {
      h6: {
        color: "black",
        fontFamily: "Fredoka",
        fontSize: '2em',
        textAlign: 'center',
      },
    }
})

const categoryList = [
  "mariage",
  "grossesse",
  "bébé",
  "portrait",
  "baptême",
  "famille",
  "couple",
  "photographe"
]


const ContactsMui = () => {
    var [categoriesGallery, setcategoriesGallery] = useState(categoryList)

    var [legend, changeLegend] = useState('Choisissez votre catégorie');
    var [srcPicture, changeSrcPicture] = useState(homePageGallery);

    var [inputValue, setinputValue] = useState('');

    var weddingResearch = useRef(null);
    var [weddingClass, setWeddingClass] = useState('')

    var pregnancyResearch = useRef(null);
    var [pregnancyClass, setPregnancyClass] = useState('')

    var babyResearch = useRef(null);
    var [babyClass, setBabyClass] = useState('')

    var portraitResearch = useRef(null);
    var [portraitClass, setPortraitClass] = useState('')

    var baptismResearch = useRef(null);
    var [baptismClass, setBaptismClass] = useState('')

    var famillyResearch = useRef(null);
    var [famillyClass, setFamillyClass] = useState('')

    var coupleResearch = useRef(null);
    var [coupleClass, setCoupleClass] = useState('')

    var photographeResearch = useRef(null);
    var [photographeClass, setPhotographeClass] = useState('')


const MatchBoth = () => {
        switch(inputValue) {
        case categoriesGallery[0] :
                setWeddingClass('selectedResearchGallery');
        break;
        case categoriesGallery[1] :
                setPregnancyClass('selectedResearchGallery');
        break;
        case categoriesGallery[2] :
                setBabyClass('selectedResearchGallery');
        break;
        case categoriesGallery[3] :
                setPortraitClass('selectedResearchGallery');
        break;
        case categoriesGallery[4] :
                setBaptismClass('selectedResearchGallery');
        break;
        case categoriesGallery[5] :
                setFamillyClass('selectedResearchGallery');
        break;
        case categoriesGallery[6] :
                setCoupleClass('selectedResearchGallery');
        break;
        case categoriesGallery[7] :
                setPhotographeClass('selectedResearchGallery');
        break;
        }
        if (inputValue != categoriesGallery[0]) {
                setWeddingClass('')
        } 
        if (inputValue != categoriesGallery[1]) {
                setPregnancyClass('')
        } 
        if (inputValue != categoriesGallery[2]) {
                setBabyClass('')
        } 
        if (inputValue != categoriesGallery[3]) {
                setPortraitClass('')
        } 
        if (inputValue != categoriesGallery[4]) {
                setBaptismClass('')
        } 
        if (inputValue != categoriesGallery[5]) {
                setFamillyClass('')
        } 
        if (inputValue != categoriesGallery[6]) {
                setCoupleClass('')
        } 
        if (inputValue != categoriesGallery[7]) {
                setPhotographeClass('')
        } 
}

const classes = useStyles();
  return (
    <ThemeProvider theme={themeContactsGallery}>

        <TitlePartChoice title="Galerie"/>
                <InputStyled>
                        <input type='text'  className={classes.inputStyles} onChange={event =>setinputValue(event.target.value)} onKeyUp={MatchBoth} placeholder="Chercher une catégorie"/>
                </InputStyled>
        <Grid container md={12} spacing={1}>
            <Grid item md={6}>
                  <Grid container md={12}>

                    <Grid item md={6}>
                            <div id="weddingPartGallery" onClick={() => { changeLegend('Mariage'); changeSrcPicture(weddingGallery)}}>
                                    <CreationDifferentPartGallery 
                                            text1={categoriesGallery[0]}
                                            text2={weddingGallery}
                                            ref1={weddingResearch}
                                            ref2={weddingClass}
                                    />
                            </div>
                    </Grid>

                    <Grid item md={6}>
                            <div onClick={() => { changeLegend('Grossesse'); changeSrcPicture(pregnancyGallery)}}>
                                    <CreationDifferentPartGallery
                                            text1={categoriesGallery[1]}
                                            text2={weddingGallery}
                                            ref1={pregnancyResearch}
                                            ref2={pregnancyClass}
                                    />
                            </div>
                    </Grid>

                    <Grid item md={6}>
                            <div onClick={() => { changeLegend('Bébé'); changeSrcPicture(babyGallery)}}>
                                    <CreationDifferentPartGallery
                                            text1={categoriesGallery[2]}
                                            text2={babyGallery}
                                            ref1={babyResearch}
                                            ref2={babyClass}
                                    />
                            </div>
                    </Grid>

                    <Grid item md={6}>  
                            <div onClick={() => { changeLegend('Portrait'); changeSrcPicture(portraitGallery)}}>
                                    <CreationDifferentPartGallery
                                            text1={categoriesGallery[3]}
                                            text2={portraitGallery}
                                            ref1={portraitResearch}
                                            ref2={portraitClass}
                                    />
                            </div>
                    </Grid>

                    <Grid item md={6}>
                            <div onClick={() => { changeLegend('Baptême'); changeSrcPicture(baptismGallery)}}>
                                    <CreationDifferentPartGallery
                                            text1={categoriesGallery[4]}
                                            text2={baptismGallery}
                                            ref1={baptismResearch}
                                            ref2={baptismClass}
                                    />
                            </div>
                    </Grid>

                    <Grid item md={6}>
                            <div onClick={() => { changeLegend('Famille'); changeSrcPicture(famillyGallery)}}>
                                    <CreationDifferentPartGallery
                                            text1={categoriesGallery[5]}
                                            text2={famillyGallery}
                                            ref1={famillyResearch}
                                            ref2={famillyClass}
                                    /> 
                            </div>
                    </Grid>

                    <Grid item md={6}>
                            <div onClick={() => { changeLegend('Couple'); changeSrcPicture(coupleGallery)}}>
                                    <CreationDifferentPartGallery
                                            text1={categoriesGallery[6]}
                                            text2={coupleGallery}
                                            ref1={coupleResearch}
                                            ref2={coupleClass}
                                    />
                            </div>
                    </Grid>

                    <Grid item md={6}>
                            <div onClick={() => { changeLegend('Photographe'); changeSrcPicture(photographeGallery)}}>
                                    <CreationDifferentPartGallery
                                            text1={categoriesGallery[7]}
                                            text2={coupleGallery}
                                            ref1={photographeResearch}
                                            ref2={photographeClass}
                                    />
                            </div>
                    </Grid>
            </Grid>
            </Grid>

            <Grid item md={6}>
                <ChangingPictureGallery
                    source1= {srcPicture}
                    ref1= {legend}
                />
            </Grid>
        </Grid>


           




                        

                       

                       

                    
                        

                 

    
    

    </ThemeProvider>

  )
}

export default ContactsMui