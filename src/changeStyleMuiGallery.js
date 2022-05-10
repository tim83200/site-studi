import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles'
import { makeStyles } from '@mui/styles';
import React from 'react';

const CreationDifferentPartGallery = ({ref1,ref2,ref3, text1,text2}) => {
    const useStyles = makeStyles({
        picturesGallery: {
            width: "12em",
            height: 'auto',
            borderRadius: "0.5em",
        },
    })
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        backgroundColor: "whitesmoke",
        width: "80vh",
        textAlign: 'center',
        marginBottom: '1em',
        borderRadius: "0.5em"
    },
    [theme.breakpoints.up('sm')]: {
        backgroundColor: "whitesmoke",
        textAlign: 'center',
        marginLeft: "5em",
        borderRadius: "0.5em",
        marginBottom: '1em',
        paddingBottom: "1em",
        paddingRight: "1em",
        paddingLeft: "1em",
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: "whitesmoke",
        textAlign: 'center',
        borderRadius: "0.5em",
        marginLeft: "1em",
        marginBottom: "1em",
        marginRight: "3em",
        paddingRight: 0,
        width: "90%"
    },
}))

const classes = useStyles();
        return (
                <Root>
                        <Typography variant="h6" ref={ref1} className={ref2}>
                                {text1}
                            </Typography>
                            <Typography variant="picturePartGallery" className={ref2} >
                                <img src={text2} className={classes.picturesGallery}/>
                        </Typography>
                </Root>

        )
    }


export default CreationDifferentPartGallery