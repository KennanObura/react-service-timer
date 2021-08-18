import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
import TimerTabPanel from './TimerTabPanel';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import { DialogTitle } from '@material-ui/core';
import { useState } from 'react';
import { useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

const timerNotification = new Audio('/timer_notification.mp3');
const serviceNotification = new Audio('/service_notification.mp3');

const styles = makeStyles((theme) => ({


    dialogHeader: {
        height: 35,
        maxHeight: 35
    },
    dialogTitle: {
        fontSize: "6px",
        fontFamily: 'sans-serif'
    }

}));

function PaperComponent(props) {
    return (
        <Draggable>
            <Paper {...props} />
        </Draggable>
    )
}




const DraggableDialog = (props) => {

    const {
        isServiceTimerEnabled,
        setServiceTimerEnabled
    } = props;


    const [stopWatchCountInSeconds, setStopWatchCountInSeconds] = useState(0);
    const [isStopWatchCounting, setIsStopWatchCounting] = useState(false);
    const [breakTimerCountInSeconds, setSetBreakTimerCountInSeconds] = useState(0);
    const [isBreakTimerCountCounting, setIsBreakTimerCountCounting] = useState(false);
    const [timerCountDownInSeconds, setTimerCountDownInSeconds] = useState(0);
    const [isTimerCountDownCounting, setIsTimerCountDownCounting] = useState(false);
    const [isTimerSet, setTimerCounter] = useState(false);
    const [dialogMinimized, setDialogMinimized] = useState(false);

    const classes = styles();

    const handleClose = () => {
        setServiceTimerEnabled(false)
        setIsStopWatchCounting(false)
        setStopWatchCountInSeconds(0)
    }

    const countDownTick = useCallback(() => {
        setTimerCountDownInSeconds(timerCountDownInSeconds - 1);
    })

    const stopWatchTick = useCallback(() => {
        setStopWatchCountInSeconds(stopWatchCountInSeconds + 1);
    })


    React.useEffect(() => {
        if (timerCountDownInSeconds <= 0)
            setIsTimerCountDownCounting(false)

        if (stopWatchCountInSeconds === 350)
            serviceNotification.play();

        if (timerCountDownInSeconds === 1)
            timerNotification.play();

        if (isTimerCountDownCounting && isStopWatchCounting) {
            const timerId = setInterval(() => {
                countDownTick()
                stopWatchTick()
            }, 1000);
            return () => clearInterval(timerId);
        }
        if (isTimerCountDownCounting) {
            const timerId = setInterval(() => countDownTick(), 1000);
            return () => clearInterval(timerId);
        }
        if (isStopWatchCounting) {

            const timerId = setInterval(() => stopWatchTick(), 1000);
            return () => clearInterval(timerId);
        }
    }, [timerCountDownInSeconds, isTimerCountDownCounting, isStopWatchCounting, countDownTick, stopWatchTick]);


    const handleMinimize = () => setDialogMinimized(!dialogMinimized);


    return (
        <div>
            <div>
                <TextField style={{ width: 400 }} />
            </div>
            <Dialog
                hideBackdrop
                disableEnforceFocus
                style={{ position: 'initial' }}
                open={isServiceTimerEnabled}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                disableBackdropClick>


                <DialogActions className={classes.dialogHeader}>
                    <DialogTitle
                        disableTypography="true"
                        id="draggable-dialog-title"
                        className={{ root: classes.dialogTitle }}>Service Timer</DialogTitle>
                    {!dialogMinimized
                        ? <RemoveOutlinedIcon
                            onClick={handleMinimize} />
                        : <AspectRatioIcon
                            onClick={handleMinimize} />
                    }
                    <CancelIcon
                        onClick={handleClose}
                        color="secondary" />
                </DialogActions>

                {!dialogMinimized
                    ? <TimerTabPanel
                        stopWatchCountInSeconds={stopWatchCountInSeconds}
                        setStopWatchCountInSeconds={setStopWatchCountInSeconds}
                        setIsStopWatchCounting={setIsStopWatchCounting}
                        isStopWatchCounting={isStopWatchCounting}
                        timerCountDownInSeconds={timerCountDownInSeconds}
                        setTimerCountDownInSeconds={setTimerCountDownInSeconds}
                        isTimerCountDownCounting={isTimerCountDownCounting}
                        setIsTimerCountDownCounting={setIsTimerCountDownCounting}
                        isTimerSet={isTimerSet}
                        setTimerCounter={setTimerCounter}
                        breakTimerCountInSeconds={breakTimerCountInSeconds}
                        isBreakTimerCountCounting={isBreakTimerCountCounting}
                        setSetBreakTimerCountInSeconds={setSetBreakTimerCountInSeconds}
                        setIsBreakTimerCountCounting={setIsBreakTimerCountCounting}
                    />
                    : <React.Fragment />}
            </Dialog>
        </div>
    )

}



export default DraggableDialog