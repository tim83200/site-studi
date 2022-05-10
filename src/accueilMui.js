import { makeStyles } from '@mui/styles';
import homePagePicture from './picture/homePageLastVersion.jpg'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline';


const useStyles = makeStyles(() => ({
    root: {
        minHeight: '88vh',
        backgroundImage: `url(${homePagePicture})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        maxHeight: '95%'
    }
}))

const HomePageMui = () => {
    const classes= useStyles();
    return(
                <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                                <div className={classes.root}>
                                <CssBaseline />
                                </div>
                        </Grid>
                </Grid>

    )
}

export default HomePageMui