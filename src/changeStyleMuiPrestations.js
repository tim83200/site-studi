import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme  } from '@mui/material/styles'
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import { styled} from '@mui/material/styles'

const CreationDifferentPartPrestations = ({text1,text2,text3}) => {
    const useStyles = makeStyles({
      picturesPrestations: {
            width: "15em",
            height: 'auto',
            borderRadius: "0.5em",
          },
    })
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        backgroundColor: "blue",
        textAlign: 'center',
        width : "67vh",
        paddingBottom: '2em',
        borderRadius: "0.5em",
        marginBottom: "1em",
    },
    [theme.breakpoints.up('sm')]: {
        backgroundColor: "whitesmoke",
        textAlign: 'center',
        paddingBottom: '3em',
        borderRadius: "0.5em",
        marginLeft: "15%",
    },
    [theme.breakpoints.up('md')]: {
        backgroundColor: "whitesmoke",
        textAlign: 'center',
        width: "95%",
        paddingBottom: '3em',
        borderRadius: "0.5em",
        marginRight: "3em",
        marginLeft: "0.7em"
    },
}))
const classes = useStyles();
        return (
                <Root>
                    <Typography variant='h6'>      
                        {text1} <br/>
                        {text2} 
                    </Typography>
                    <Typography variant='picturePartPrestations'>      
                        <img src={text3} className={classes.picturesPrestations}/>
                    </Typography>
                </Root>
        )
      }

export default CreationDifferentPartPrestations
