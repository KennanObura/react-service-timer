import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import StopWatch from './StopWatch';
import CountDownTimer from './CountDownTimer';
import BreakTimer from './BreakTimer';
import { Container } from '@material-ui/core';


function TimerTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Container
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}>

            <div style={{ display: value === index ? 'block' : 'none' }}>
                <Box p={3}>
                    <React.Fragment>{children}</React.Fragment>
                </Box>
            </div>

        </Container>
    );
}

TimerTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 450,
    },
    tab: {
        textTransform: "none",
        minWidth: 80, 
        width: 80, 
    },
    tabContent: {
        minHeight: 200,
        height: 200
    }
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example">
                    <Tab className={classes.tab} label="Stop Watch" {...a11yProps(0)} />
                    <Tab className={classes.tab} label="Timer" {...a11yProps(1)} />
                    <Tab className={classes.tab} label="Break" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>
                <TimerTabPanel
                    value={value}
                    index={0}
                    dir={theme.direction}>
                    <StopWatch
                        stopWatchCountInSeconds={props.stopWatchCountInSeconds}
                        setStopWatchCountInSeconds={props.setStopWatchCountInSeconds}
                        setIsStopWatchCounting = {props.setIsStopWatchCounting}
                        isStopWatchCounting ={props.isStopWatchCounting}  
                    />
                </TimerTabPanel>
                <TimerTabPanel
                    value={value}
                    className={classes.tabContent}
                    index={1}
                    dir={theme.direction}>
                    <CountDownTimer 
                       timerCountDownInSeconds={props.timerCountDownInSeconds}
                       setTimerCountDownInSeconds={props.setTimerCountDownInSeconds}
                       isTimerCountDownCounting={props.isTimerCountDownCounting}
                       setIsTimerCountDownCounting={props.setIsTimerCountDownCounting}
                       isTimerSet = {props.isTimerSet} 
                       setTimerCounter = {props.setTimerCounter}
                     />
                </TimerTabPanel>
                <TimerTabPanel
                    value={value}
                    index={2}
                    dir={theme.direction}>
                     <BreakTimer
                        breakTimerCountInSeconds={props.breakTimerCountInSeconds}
                        isBreakTimerCountCounting={props.isBreakTimerCountCounting}
                        setSetBreakTimerCountInSeconds = {props.setSetBreakTimerCountInSeconds}
                        setIsBreakTimerCountCounting ={props.setIsBreakTimerCountCounting}  
                    />
                </TimerTabPanel>
            </SwipeableViews>
        </div>
    );
}


