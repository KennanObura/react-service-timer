import { Box, Button, Grid } from '@material-ui/core';

import React from 'react';
import { useState } from 'react';
import {MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import buttonStyles from './TimerButton/Styles';
import Clock from './Clock';




const CountDownTimer = (props) => {
    const classes = buttonStyles();
    const {
        timerCountDownInSeconds,
        setTimerCountDownInSeconds,
        isTimerCountDownCounting,
        setIsTimerCountDownCounting,
        isTimerSet,
        setTimerCounter
    } = props



    const defaultTime = moment().utcOffset(0);
    defaultTime.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    defaultTime.toISOString()
    defaultTime.format();


    const [selectedDate, handleDateChange] = useState(defaultTime);

    const handleOnDateChanged = (date) => {
        handleDateChange(date)
        const valueOfInput = moment(date).format('HH:mm:ss').toString();
        const durationInSecond = moment.duration(valueOfInput).asSeconds();
        setTimerCountDownInSeconds(durationInSecond);
        setTimerCounter(true)
        console.log(valueOfInput);
        console.log(durationInSecond);

    }


    const handleReset = () => {
        if (isTimerCountDownCounting <= 0)
            setTimerCounter(false)
    }

    const handleStop = () => {
        // let time = moment.utc(timerCountDownInSeconds * 1000).format('HH:mm:ss');
        // handleDateChange(time);
        // console.log(time + '---')
        setIsTimerCountDownCounting(false)
    }

    const handleOnDialogClose = () => {

    }



    const handleStart = () => {
        if (!isTimerSet)
            setTimerCounter(true)
        setIsTimerCountDownCounting(true)
    }


    return (
        <>
            {
                !isTimerSet
                    ? <MuiPickersUtilsProvider utils={MomentUtils}>
                        <form className={classes.clockContainer}>
                        <TimePicker
                            ampm={false}
                            className={classes.clock}
                            openTo="minutes"
                            views={["hours", "minutes", "seconds"]}
                            format="HH:mm:ss"
                            value={selectedDate}
                            onChange={handleOnDateChanged}
                            onClose={handleOnDialogClose}
                        />
                        </form>
                    </MuiPickersUtilsProvider>
                    : <Clock timeInseconds={timerCountDownInSeconds}/>
            }

            <Box className={classes.buttonContainer}></Box>
            <Grid container spacing={0} >
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="default"
                        disabled={isTimerCountDownCounting}
                        onClick={handleReset}>
                        {timerCountDownInSeconds <= 0 || !isTimerSet ? "Set" : "Reset"}

                    </Button>
                </Grid>
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="secondary"
                        disabled={!isTimerCountDownCounting}
                        onClick={handleStop} >Stop</Button>
                </Grid>
                <Grid item sm={4} className={classes.buttonSlot}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="primary"
                        disabled={isTimerCountDownCounting || timerCountDownInSeconds <= 0}
                        onClick={handleStart}>Start</Button>
                </Grid>
            </Grid>
        </>

    );
}

export default CountDownTimer;