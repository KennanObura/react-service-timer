
import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import buttonStyles from "./TimerButton/Styles";
import PropTypes from 'prop-types';
import Clock from './Clock';


const BreakTimer = (props) => {

    const classes = buttonStyles();

    const {
        breakTimerCountInSeconds,
        isBreakTimerCountCounting,
        setSetBreakTimerCountInSeconds,
        setIsBreakTimerCountCounting,
    } = props;


    const handleReset = () => {
        setSetBreakTimerCountInSeconds(0);
        setIsBreakTimerCountCounting(false);
    }
    const handleStart = () => setIsBreakTimerCountCounting(true);
    const handleStop = () => setIsBreakTimerCountCounting(false);

    return (


        <>
            <Clock timeInseconds={breakTimerCountInSeconds} />
            <Box className={classes.buttonContainer}></Box>
            <Grid container spacing={0} >
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        disabled={isBreakTimerCountCounting || breakTimerCountInSeconds === 0}
                        color="default"
                        onClick={handleReset}
                    >Reset

                    </Button>
                </Grid>
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        disabled={!isBreakTimerCountCounting}
                        color="secondary"
                        onClick={handleStop}
                    >Stop</Button>
                </Grid>
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        disabled={isBreakTimerCountCounting}
                        color="primary"
                        onClick={handleStart}
                    >Start</Button>
                </Grid>
            </Grid>
        </>
    );


}


BreakTimer.propTypes = {
    breakTimerCountInSeconds: PropTypes.any.isRequired,
    isBreakTimerCountCounting: PropTypes.bool.isRequired,
    setSetBreakTimerCountInSeconds: PropTypes.func.isRequired,
    setIsBreakTimerCountCounting: PropTypes.func.isRequired,
};

export default BreakTimer;