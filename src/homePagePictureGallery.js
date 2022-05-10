import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles'
import { makeStyles } from '@mui/styles';
import homePageGallery from './picture/homePageGallery.jpg'
import React from 'react';

const ChangingPictureGallery = ({source1, ref1}) => {
    const useStyles = makeStyles({
        picturesChangeGallery: {
            width: "auto",
            height: '50vh',
            marginTop: '3em',
            borderRadius: "0.5em",
        },
    })
    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            backgroundColor: "whitesmoke",
            textAlign: 'center',
            marginLeft: "3em",
            borderRadius: "0.5em",
        },
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: "whitesmoke",
            textAlign: 'center',
            marginLeft: "5em",
            width: '100%',
            marginLeft: 0,
            borderRadius: "0.5em",
            backgroundColor: 'transparent'
        },
    }))
    
const classes = useStyles();
        return (
                <Root>
                        <Typography variant="picturePartGallery" >
                                <img src={source1}  className={classes.picturesChangeGallery}/>
                        </Typography>
                        <Typography variant="h6" >
                                {ref1}
                        </Typography>
                </Root>

        )
    }


export default ChangingPictureGallery