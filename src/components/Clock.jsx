import { Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const clockStyles = makeStyles((theme) => ({

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

    }

}));





const Clock = (props) => {

    const { timeInseconds } = props;
    const classes = clockStyles();

    const formatTime = (secs) => {
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor(secs / 60) % 60;
        let seconds = secs % 60;
        return [hours, minutes, seconds]
            .map(v => ('' + v).padStart(2, '0'))
            .filter((v, i) => v !== '00' || i >= 0)
            .join(':');
    }

    return (
        <Container maxWidth="sm" className={classes.clockContainer}>
            <Typography className={classes.clock}>
                {formatTime(timeInseconds)}
            </Typography>
        </Container>
    )
}

Clock.propTypes = {
    props: PropTypes.any.isRequired
}

export default Clock;
