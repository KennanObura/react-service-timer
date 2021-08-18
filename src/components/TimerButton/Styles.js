
import { makeStyles } from '@material-ui/styles';

const buttonStyles = makeStyles((theme) => ({

    clock: {
        paddingTop: "8px",
        // fontSize: "48px",
        height: "8vh",
        fontSize: "10vh",
        lineHeight: "8.4vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",

    },
    clockContainer: {
         display: "flex",
         alignContent: "center",
         justifyContent: "center"

    },
    timeForm: {
        underline: {
            "&&&:before": {
                borderBottom: "none"
            },
            "&&:after": {
                borderBottom: "none"
            }
        },
        fontSize: "32px",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    button: {
        textTransform: "none"
    },
    buttonSlot: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    buttonStart: {
        color: '#52B44B',
        textTransform: "none"
    },
    buttonContainer: {
     
        marginBottom: 50,
    
    
    }
}));

export default buttonStyles;