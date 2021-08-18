
import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import buttonStyles from "./TimerButton/Styles";
import PropTypes from 'prop-types';
import Clock from './Clock';


const StopWatch = (props) => {

    const classes = buttonStyles();

    const {
        stopWatchCountInSeconds,
        isStopWatchCounting,
        setStopWatchCountInSeconds,
        setIsStopWatchCounting,
    } = props;


    const handleReset = () => {
        setStopWatchCountInSeconds(0);
        setIsStopWatchCounting(false);
    }
    const handleStart = () => setIsStopWatchCounting(true);
    const handleStop = () => setIsStopWatchCounting(false);

    const getColorCode = () => {
        if (stopWatchCountInSeconds >= "420")
            return "red";
        else if (stopWatchCountInSeconds > "16" && stopWatchCountInSeconds < "20") {
            return "#FFA500";
        }

        else
            return "black"
    }


    return (
        <>
            <Clock timeInseconds={stopWatchCountInSeconds} />
            <Box className={classes.buttonContainer}></Box>
            <Grid container spacing={0} >
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        disabled={isStopWatchCounting || stopWatchCountInSeconds === 0}
                        color="default"
                        onClick={handleReset}
                    >Reset

                    </Button>
                </Grid>
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        disabled={!isStopWatchCounting}
                        color="secondary"
                        onClick={handleStop}
                    >Stop</Button>
                </Grid>
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        disabled={isStopWatchCounting}
                        color="primary"
                        onClick={handleStart}
                    >Start</Button>
                </Grid>
            </Grid>
        </>
    );
}


StopWatch.propTypes = {
    stopWatchCountInSeconds: PropTypes.any.isRequired,
    isStopWatchCounting: PropTypes.bool.isRequired,
    setStopWatchCountInSeconds: PropTypes.func.isRequired,
    setIsStopWatchCounting: PropTypes.func.isRequired,
};

export default StopWatch;

